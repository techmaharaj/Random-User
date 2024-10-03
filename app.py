from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fetch_user', methods=['GET'])
def fetch_user():
    response = requests.get('https://randomuser.me/api/')
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=False)