Express EJS Starter App

A simple Express.js application using EJS as the view engine to render dynamic data on the server.

--------------------------------------------------

Features
- Express.js server
- EJS templating engine
- Dynamic data rendering
- Beginner-friendly setup

--------------------------------------------------

Project Structure

project-root/
│
├── views/
│   └── home.ejs
├── app.js
├── package.json

--------------------------------------------------

Installation

1. Clone the repository
git clone <repository-url>

2. Install dependencies
npm install

3. Start the server
node app.js

--------------------------------------------------

Usage

Open your browser and visit
http://localhost:3200

The page renders a dynamic name using EJS.

--------------------------------------------------

How It Works

Express handles routing  
EJS renders HTML templates  
Data is passed from the route to the view

Example:
res.render('home', { name: "Muhammad Raheel" });

--------------------------------------------------

Technologies Used
- Node.js
- Express.js
- EJS

--------------------------------------------------

Author
Muhammad Raheel

--------------------------------------------------

License
This project is for learning and practice purposes.
