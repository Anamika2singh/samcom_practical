require('dotenv').config()
const config= require('./config/app');

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const authroute = require('./routes/auth');
//database coonection with mongodb
mongoose.Promise = global.Promise;
mongoose.connect(
  config.MONGODB_URL , { useNewUrlParser: true, useUnifiedTopology: true }) 
         .then(() => console.log("connection successful"))
          .catch((err) => console.error(err));
    
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',authroute);

app.listen(config.PORT|| 3000, () => {
  console.log(`Server started ${config.PORT}...`)
})