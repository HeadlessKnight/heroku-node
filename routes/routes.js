const express = require("express")

const app = express.Router()
//const modal = require('../modal/SignUp')

var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://HeadlessNite:Injustice2@cluster0.8ydjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.get('/home', async function(request, response){
    response.render('index')
})

module.exports = app;