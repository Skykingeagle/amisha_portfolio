# api/index.py

from flask import Flask, request, jsonify
from flask_cors import CORS
# We only need to import the final function from our pipeline
from rag_pipeline import generate_answer

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    query = request.json.get("query", "")
    if not query:
        return jsonify({"error": "Query is missing."}), 400

    try:
        answer = generate_answer(query)
        return jsonify({"answer": answer})
    except Exception as e:
        print(f"Error processing chat request: {e}")
        return jsonify({"error": "An internal error occurred."}), 500