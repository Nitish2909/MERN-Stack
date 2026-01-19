
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

// mongoose.model("model",schema)
//It create a model that name is user and schema
const userModel = mongoose.model('user',userSchema) 

//With the help of this we can export userModel. Now you use this anywhere in the program by importing
module.exports = userModel