// import express
const express = require("express")


// create app to run express
const app = express();
const drinks = require("./models/drinks.js")

// middleware


// routes
app.get("/", (req,res) =>{
    res.send('Welcome to the Gitpub App!');
})

app.get("/drinks", (req,res) =>{
    res.render("index.ejs", {drinks});
})


// listener
app.listen(3000, () => {
    console.log("listening on 3000 port")
})