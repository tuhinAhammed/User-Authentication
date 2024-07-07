const express = require('express')
const dbConnection = require('./config/dbConection')
const userList = require('./models/userSchema')
const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config()
dbConnection()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post("/registration", (req, res) => {
    // res.send("ok")
    const {firstName,lastName,email,gender,password} = req.body

    const users = new userList ({
        firstName,
        lastName,
        email,
        gender,
        password
    })
    users.save()
    res.send(users)
})
app.get("/registration" , async (req,res) => {
    const data = await userList.find({})
    res.send(data)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})