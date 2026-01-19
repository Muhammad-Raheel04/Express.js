Age Authentication Middleware

What It Does

i.   Takes user age from an HTML form
ii.  If age < 18 → redirects to **Access Denied** page
iii. If age ≥ 18 → allows access to **Services** page
iv.  Core logic is handled using **Express middleware**

Tech Stack

i.   Node.js
ii.  Express.js
iii. HTML & CSS

Project Structure

├── server.js
├── pages/
│   ├── index.html
│   ├── denied.html
│   └── services.html
├── public/
│   └── css/
└── package.json

How to Run

bash
npm install
npm start

Then open:

http://localhost:3200

Purpose

This project is built for **learning and practicing Express middleware**, not production use.

Feel free to extend it with sessions, authentication, or route protection.
