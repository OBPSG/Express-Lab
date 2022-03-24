const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => 
{
    res.send("Hello from the web, server side!")
});

app.listen(3000);