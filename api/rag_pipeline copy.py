import os
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings
from extractors.pdf_extractor import extract_multiple_pdfs
from extractors.web_extractor import extract_website_text
import dotenv
from google import genai


dotenv.load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def build_knowledge_file(pdf_paths: list[str], website_url: str, output_path="data/knowledge.txt"):
    pdf_text = extract_multiple_pdfs(pdf_paths)
    website_text = extract_website_text(website_url)
    combined_text = pdf_text + "\n\n" + website_text
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(combined_text)
    print(f"Knowledge file saved at {output_path}")


embedding_model = SentenceTransformer("all-MiniLM-L6-v2")
chroma_client = chromadb.Client(Settings(persist_directory="./chroma"))
collection = chroma_client.get_or_create_collection(name="portfolio")

def chunk_text(text: str, chunk_size: int = 300):
    paragraphs = text.split("\n")
    chunks = []
    current_chunk = ""
    for para in paragraphs:
        if len(current_chunk) + len(para) < chunk_size:
            current_chunk += " " + para
        else:
            chunks.append(current_chunk.strip())
            current_chunk = para
    if current_chunk:
        chunks.append(current_chunk.strip())
    return chunks

def index_knowledge(file_path="data/knowledge.txt"):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"{file_path} not found")

    if collection.count() > 0:
        return

    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()

    chunks = chunk_text(text)
    embeddings = embedding_model.encode(chunks)
    collection.add(
        documents=chunks,
        embeddings=embeddings.tolist(),
        ids=[str(i) for i in range(len(chunks))]
    )
    print(f"Indexed {len(chunks)} chunks into Chroma.")


def retrieve(query: str, top_k: int = 5):
    query_embedding = embedding_model.encode([query])
    results = collection.query(
        query_embeddings=query_embedding.tolist(),
        n_results=top_k
    )
    return results["documents"][0]

def generate_answer(query: str, top_k: int = 5) -> str:
    # get contextual chunks
    chunks = retrieve(query, top_k=top_k)
    context = "\n".join(chunks)

    prompt = f"""
You are an AI assistant. Answer the question using ONLY the context below.
Do not make things up.
if user asks something outside the context, politely say you are trained to showcase the RAG implementation in this project. You can answer normal questions such as a greeting etc.
Do not mention any Universities from the data or context you have, Only provide information related to the portfolio, projects, skills, and resume of the owner of this portfolio website.
Context:
{context}

Question:
{query}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text
