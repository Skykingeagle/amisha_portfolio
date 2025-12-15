# backend/build_knowledge.py
from backend.extractors.pdf_extractor import extract_multiple_pdfs
from backend.extractors.web_extractor import extract_website_text

# Extract PDFs
pdf_text = extract_multiple_pdfs(["data/resume.pdf", "data/sop.pdf"])

# Extract website
site_text = extract_website_text("http://localhost:5173")  

# Combine everything
with open("data/knowledge.txt", "w", encoding="utf-8") as f:
    f.write(pdf_text + "\n\n" + site_text)

print("knowledge.txt built successfully!")
