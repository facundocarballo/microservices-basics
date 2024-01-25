from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Allow any origin...
CORS(app)

@app.route("/")
def index():
    return "Hello World from Python!!"

PORT = 3003

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT)
