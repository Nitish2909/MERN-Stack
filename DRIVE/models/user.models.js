
const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[3,'username must be at least 3 character long']
    },

    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[13,'email must be at least 13 character long']
    },
    password:{
        type:String,
        require:true,
        trim:true,
        minlength:[5,'password must be at least 5 character long']
    }
})

const user = mongoose.model('user',userSchema)

module.exports=user;