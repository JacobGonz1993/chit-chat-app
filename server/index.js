const express = require('express');
const app = express();
app.use(express.static("public"));


const bodyParser = require("body-parser");
app.use(bodyParser.json());

// let topicRoute = require("./routes/topicRoute")
// app.use("/topics", topicRoute)

let mongoose = require("mongoose");
mongoose.connect("mongodb+srv://JacobGonz1:3KEy7e!HDd#8rEz@spacejam-u3f5j.mongodb.net/chit-chat-db", {useNewUrlParser: true});


const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});