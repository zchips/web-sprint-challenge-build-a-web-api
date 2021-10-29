const express = require('express');
const server = express();
server.use(express.json());

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.get("/", (req, res, next) => {
    res.send(`Server Running`)
})
server.use((req, res, next, error) => {
    res.status(error.status || 500).json({message:error.message,});
})




module.exports = server;
