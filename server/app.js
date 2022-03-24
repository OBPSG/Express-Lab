const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

// app.get("/", (req, res) => 
// {
//     res.send("Hello from the web, server side!")
// });

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "../public")));

app.post("/formsubmissions", (req, res) => {
    // console.log(req.body.userName);
    // console.log(req.body.postBody);
    const Post = {
        userName: req.body.userName,
        body: req.body.postBody
    };

    let filePath = path.join (__dirname, "/posts.json");

    fs.appendFileSync(filePath, JSON.stringify(Post));
    
    res.send("Your post has been received!")
});

app.listen(3000);