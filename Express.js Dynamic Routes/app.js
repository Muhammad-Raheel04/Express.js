require('dotenv').config();
const express = require('express');
const app = express();

const users = {
    101: { name: "Ali", role: "Student" },
    102: { name: "Ahmed", role: "Developer" },
    admin: { name: "Muhammad Raheel", role: "Super User" }
}

app.get('/', (req, res) => {
    res.send("This is home page.");
})

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;

    if (!users[userId]) {
        return res.status(404).send("User not found");
    }

    res.send(`
        <h1>User Porfile</h1>
        <p><b>ID:</b>${userId}</p>
        <p><b>Name:</b> ${users[userId].name}</p>
        <p><b>Role:</b>${users[userId].role}</p>
        `)
})
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server live at http://localhost:3200");
})