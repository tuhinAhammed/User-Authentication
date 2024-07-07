const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstName : {
        type : String ,
        required : true
    },
    lastName : {
        type : String,
        require: true
    },
    email : {
        type : String ,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("useList" , userSchema)