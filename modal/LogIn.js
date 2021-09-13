const mongoose = require('mongoose');

const LogInSchema = new mongoose.Schema({
    password:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        required:true,
        minlenght:5
    }
    
})

const LogIn = new mongoose.model('LogIn',LogInSchema);

module.exports = LogIn;