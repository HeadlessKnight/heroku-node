const express = require('express')
const cookie = require('cookie-parser')
const { connect } = require('./routes/routes')
const app = express()
const port = 8000

require("./db/conn")
const route = require('./routes/routes')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.set('view engine', 'hbs');
app.set('views', './view')

app.use(express.urlencoded({extended:false}));
app.use(cookie())



app.use(route)

app.listen(port)