const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect("mongodb://admin:0804783108za@ds117846.mlab.com:17846/choktwee",  { useNewUrlParser: true })
mongoose.Promise = global.Promise;


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


// routes
const employeeRoutes = require('./api/routes/employee')

app.use(`/api/employee`, employeeRoutes)


module.exports = app;