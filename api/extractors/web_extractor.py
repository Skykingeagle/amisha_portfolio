import requests
from bs4 import BeautifulSoup

def extract_website_text(url: str) -> str:
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, "html.parser")
    
    # remove scripts and styles
    for script in soup(["script", "style"]):
        script.decompose()
    
    text = soup.get_text(separator="\n")
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    return "\n".join(lines)
