# upload_knowledge.py

import os
from sentence_transformers import SentenceTransformer
from supabase import create_client, Client
import dotenv

# --- DELETE THIS LINE ---
# from rag_pipeline import chunk_text 

# --- IMPORT YOUR EXTRACTORS ---
from extractors.pdf_extractor import extract_multiple_pdfs
from extractors.web_extractor import extract_website_text

# --- THIS IS THE KEY PART ---
dotenv.load_dotenv()

# --- ADD THESE 4 DEBUGGING LINES ---
print("--- DEBUGGING .env LOAD ---")
print(f"SUPABASE_URL loaded: {os.environ.get('SUPABASE_URL')}")
print(f"SUPABASE_SERVICE_KEY loaded: {os.environ.get('SUPABASE_KEY')}")
print("--------------------------")

# # --- IMPORTANT: Get these from your Supabase project settings ---
# SUPABASE_URL_FROM_ENV = os.environ.get("SUPABASE_URL")
# SUPABASE_SERVICE_KEY_FROM_ENV = os.environ.get("SUPABASE_SERVICE_KEY")


# --- PASTE THE FUNCTION HERE ---
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

# --- THE REST OF YOUR SCRIPT STAYS THE SAME ---

# Get these from your Supabase project settings
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Supabase URL and Key must be set in your .env file")

# 1. Initialize Supabase client and the embedding model
supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

print("Extracting text from PDF and website sources...")
# 2. Extract text from sources using your existing functions
pdf_text = extract_multiple_pdfs(["data/Resume.pdf", "data/sop.pdf"])
website_text = extract_website_text("https://amishaportfoliopage.vercel.app/")
combined_text = pdf_text + "\n\n" + website_text

# 3. Chunk the text
chunks = chunk_text(combined_text)
print(f"Text has been split into {len(chunks)} chunks.")

# 4. Generate embeddings
print("Generating embeddings for text chunks...")
embeddings = embedding_model.encode(chunks, show_progress_bar=True)

# 5. Upload to Supabase
print("Uploading chunks and embeddings to Supabase...")
for i, chunk in enumerate(chunks):
    supabase_client.table('documents').insert({
        'content': chunk,
        'embedding': embeddings[i].tolist()
    }).execute()

print("\n--- Knowledge base upload complete! ---")
print("You can now deploy your Vercel backend.")