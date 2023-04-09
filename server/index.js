"use strict";
const express = require("express");
const app = express();
// const http = require("http").createServer(app)
const PORT = process.env.PORT || 4001;
const dir = "/Users/mithyalabs/Desktop/SocketDemo/client/index.html";
app.get("/", (req, res) => {
    res.sendFile(dir);
    res.send("Hey");
});
app.listen(PORT, () => {
    console.log("On");
});
