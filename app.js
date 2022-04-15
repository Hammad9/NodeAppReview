const express = require("express");
const dotenv = require("dotenv");
const connectDb=require('./config/db')
const morgan=require('morgan')   //middle ware use for login etc
const exphbs=require('express-handlebars')

// Load config
dotenv.config({ path: './config/config.env' })

// Here we Conect the Db.js
connectDb();

const app = express();


// Blow is Middleware using morgan 
//login
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))   //diff level of login use dev
}


// HandleBars
app.engine('.hbs',exphbs.engine({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine','.hbs')


// Routes from index.js 
app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`))