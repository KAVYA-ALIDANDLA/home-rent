const express = require("express");
const notes = require("./data/notes"); // Ensure this file exists and exports valid data
const dotenv=require('dotenv');
const app = express();
dotenv.config();
// Root Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Notes API Route
app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// Server Listener

app.get("/api/notes/:id", (req, res) => {
    const note=notes.find((n)=>n._id===req.params.id);
    //console.log(req.params);
    res.send(note);
});

const PORT=process.env.PORT||5000;
app.listen(PORT, 
    console.log(`Server started on PORT ${PORT}`));

