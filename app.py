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
    
    # Fetching username and password
    user_info = data['results'][0]['login']
    username = user_info['username']
    password = user_info['password']
    
    # Storing username and password in plaintext (not recommended)
    print(f"Username: {username}, Password: {password}")
    
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=False)