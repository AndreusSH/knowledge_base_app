const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/users')
const connectDB = require('./db')
require('dotenv').config();


connectDB();
/*
app.get("/getUsers", (req,res) => {
    UserModel.find({}, (err, result) => {
        if(err){
          res.json(err)
        }
        else{
            res.json(result)
        }
    })
})
*/
app.listen(3001, () => {
  console.log('Server is running :-) ')
})
