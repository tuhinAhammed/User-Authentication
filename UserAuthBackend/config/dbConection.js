const express = require("express")
const mongoose =require("mongoose")
const dotenv = require('dotenv')
function dbConnection () {
    mongoose.connect(process.env.MONGODBURI)
    .then(() => console.log('Connected!'));
}


module.exports = dbConnection
// database Name : userAuthDatabase
// collection Name Name : userAuthDatabase
// Database Access
// user : userAuthDatabase
// password : userAuthDatabase123zxc

// connectLink 
// mongodb+srv://userAuthDatabase:<password>@tuhinahammed.dkanykh.mongodb.net/?retryWrites=true&w=majority&appName=tuhinAhammed