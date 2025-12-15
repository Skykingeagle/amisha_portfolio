import os
from rag_pipeline import build_knowledge_file, index_knowledge

def initialize_app():
    if os.getenv("INITIALIZE_KB", "false").lower() != "true":
        print("Skipping KB initialization")
        return

    build_knowledge_file(
        pdf_paths=["data/resume.pdf", "data/sop.pdf"],
        website_url=os.getenv("WEBSITE_URL")
    )

    index_knowledge()
