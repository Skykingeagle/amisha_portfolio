import fitz  # PyMuPDF

def extract_pdf_text(pdf_path: str) -> str:
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text += page.get_text()
    return text

def extract_multiple_pdfs(pdf_paths: list[str]) -> str:
    combined_text = ""
    for path in pdf_paths:
        combined_text += f"\n\n--- {path.split('/')[-1]} ---\n"
        combined_text += extract_pdf_text(path)
    return combined_text
