const express = require('express');

const app = express();

app.get ("/", (req, res) => {
    res.send("<h1> Hello from Node, from Inside a Docker Container ... Sushil's Container! </h1>");
});

app.listen(3000, () => {
    console.log("App Running on port 3000 ...");
});