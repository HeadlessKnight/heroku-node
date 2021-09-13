const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlenght:5,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:false
    },
    password:{
        type:String,
        required:true,
    }
})

const SignUp = new mongoose.model('SignUp',SignUpSchema);

module.exports = SignUp;