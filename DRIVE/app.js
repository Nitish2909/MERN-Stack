
const express =  require("express")
const app = express()
const userRouter= require("./routes/user.routes")
const dotenv = require("dotenv")
dotenv.config();
const connectToDB = require("./config/db")
connectToDB();
const cookiparser=require("cookie-parser")

//this is used for html page rendering
app.set("view engine", "ejs")

app.use(cookiparser())
//Built-In Middleware
//this two middleware is used to show the data in your(vs code terminal) terminal
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//this is used for config the router
//It tells Express to use userRouter for all requests whose URL starts with /user.
app.use("/user",userRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})