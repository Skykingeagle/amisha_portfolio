from flask import Flask, request, jsonify
from flask_cors import CORS
from rag_pipeline import build_knowledge_file, index_knowledge, generate_answer
import os

if not os.path.exists("data/knowledge.txt"):
    build_knowledge_file(
        pdf_paths=["data/Resume.pdf", "data/sop.pdf"],
        website_url="https://amishaportfoliopage.vercel.app/"
    )

app = Flask(__name__)
CORS(app)

index_knowledge()  # runs once on boot

@app.route("/chat", methods=["POST"])
def chat():
    query = request.json.get("query", "")
    answer = generate_answer(query)
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run()
