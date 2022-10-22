//Express
const express = require('express');
const app = express()

// dotenv
const dotenv = require('dotenv');

//morgan
const morgan = require('morgan')

//Env config
dotenv.config()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// allow us to use request body (middleware)
app.use(express.json())


// routes 
const articleRoute = require('./routes/articleRoutes')

app.use('/api/v1/articles', articleRoute)


module.exports = app