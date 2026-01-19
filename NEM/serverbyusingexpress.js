const express = require('express')
const app = express()
const userModel = require('./models/user')


app.set("view engine","ejs")

// app.get("/",(req,res)=>{
//     res.render('index')
// })

//Built-In Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("Public")) // this middleware is used for adding css

app.get("/",(req,res)=>{
    res.render('form')
})

app.get('/about',(req,res)=>{
    res.send("hello from express js. This is a about page")
})
app.get("/contact",(req,res)=>{
    res.send("this is a contact page")
})

app.post("/get-form-data",(req,res)=>{
    console.log(req.body);
    res.send("Data Received");
    
})

app.listen(3000)