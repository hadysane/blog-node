//Express
const express = require('express');
const app = express()

// dotenv
const dotenv = require('dotenv');

//morgan
const morgan = require('morgan')

//Env config
dotenv.config()

//AppError
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController')


// log routes
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// allow us to use request body (middleware)
app.use(express.json())


// routes 
const articleRoute = require('./routes/articleRoutes')

app.use('/api/v1/articles', articleRoute)

// erreur 404 
app.all('*', (req, res, next) => {

    next(new AppError(`can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)


module.exports = app