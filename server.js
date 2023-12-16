// import express
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")


// create app to run express
const app = express();
const drinks = require("./models/drinks.js")



// middleware
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use(methodOverride("_method"))



// routes
app.get("/", (req,res) =>{
    res.send('Welcome to the Gitpub App!');
})

app.get("/drinks", (req,res) =>{
    // res.send(drinks)
    res.render("index.ejs", {drinks});
})

app.get("/drinks/:id", (req,res) => {
    const id = req.params.id
    res.send(id)
})

// listener
app.listen(3000, () => {
    console.log("listening on 3000 port")
})