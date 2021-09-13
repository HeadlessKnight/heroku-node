const mongoose =require("mongoose");

const mongoURI='mongodb+srv://HeadlessNite:Injustice2@cluster0.8ydjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true,
        useFindAndModify:false
    }

).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log('no connection')
})