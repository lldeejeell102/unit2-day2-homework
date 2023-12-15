// import express
const express = require("express")


// create app to run express
const app = express();


// middleware


// routes
app.get("/", (req,res) =>{
    res.send('Welcome to the Gitpub App!');
})


// listener
app.listen(3000, () => {
    console.log("listening on 3000 port")
})