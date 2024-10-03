# Random User Generator

This is a Flask web application that generates random user profiles using the [randomuser.me](https://randomuser.me/) API. The application fetches user details and displays them in a profile card format. It also includes a loading spinner while the user data is being fetched.

## Features

- Fetches random user profiles from the randomuser.me API.
- Displays user details in a profile card.
- Shows a loading spinner while fetching user data.
- Responsive design using Materialize CSS.

## Technologies Used

- Flask
- Materialize CSS
- jQuery
- [randomuser.me API](https://randomuser.me/)

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/techmaharaj/random-user-generator.git
   cd random-user-generator
   ```

2. **Create a virtual environment:**

    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install required packages**

    `pip install flask`

4. **Run the Flask application**

    `python app.py`

5. **Open your browser and naviagte to**

    `http://127.0.0.1:5000/`

## Usage

- Click the "Fetch Random User" button to fetch and display a random user profile.
- The application will show a loading spinner while the user data is being fetched.
- The user profile will be displayed in a card format once the data is successfully retrieved.
