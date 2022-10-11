const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./router/routes')

//import db configuration
const db = require('./dbConfig/dbConfig')


const app = express();

const port = process.env.PORT;

//connect to DB
mongoose.connect(db)
    .then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log("Database connection failed. Reason: ", err);
    });


//api routes
app.use("/route", routes)



app.listen(port,() =>{
    console.log("Server Listning to port: ",port)
})