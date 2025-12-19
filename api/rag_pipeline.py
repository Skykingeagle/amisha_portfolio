# rag_pipeline.py

import os
from sentence_transformers import SentenceTransformer
from supabase import create_client, Client
import dotenv
from groq import Groq

dotenv.load_dotenv()

# ---------- CLIENTS ----------
llm_client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
supabase_client: Client = create_client(
    os.environ.get("SUPABASE_URL"),
    os.environ.get("SUPABASE_KEY")
)
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")


# ---------- RETRIEVAL (from Supabase) ----------
def retrieve(query: str, top_k: int = 5):
    query_embedding = embedding_model.encode(query).tolist()

    # Call the SQL function we created in Supabase
    results = supabase_client.rpc('match_documents', {
        'query_embedding': query_embedding,
        'match_threshold': 0.70,  # Adjust this threshold as needed
        'match_count': top_k
    }).execute()

    # The returned data is a list of documents
    return [doc['content'] for doc in results.data]


# ---------- GENERATION (RAG) ----------
# This function is almost the same as your original, just better variable names
def generate_answer(query: str, top_k: int = 5) -> str:
    # 1. Retrieve relevant context from your knowledge base
    context_chunks = retrieve(query, top_k=top_k)

    if not context_chunks:
        return (
            "I'm a portfolio assistant built to demonstrate a Retrieval-Augmented "
            "Generation (RAG) system. I can answer questions about the owner's "
            "projects, skills, and experience."
        )

    # 2. Combine the context
    context = "\n".join(context_chunks)

    # 3. Create the prompt
    prompt = f"""
You are an AI assistant. Answer the question using ONLY the context below.
Do not make things up.
If the user asks something outside the context, politely say you are trained to showcase the RAG implementation in this project. You can answer normal questions such as a greeting etc.
Do not mention any Universities from the data or context you have, Only provide information related to the portfolio, projects, skills, and resume of the owner of this portfolio website.

Context:
{context}

Question:
{query}
"""
    # 4. Generate the final answer
    try:
        response = llm_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a helpful, grounded RAG assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2,
            max_tokens=1024
        )
        return response.choices[0].message.content.strip()
    except Exception:
        return "The assistant is temporarily unavailable. Please try again in a moment."