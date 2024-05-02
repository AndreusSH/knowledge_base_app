const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const UserModel = require('./models/users')
const connectDB = require('./db')
require('dotenv').config()
const cors = require("cors")

// Use body-parser middleware
app.use(bodyParser.json())

app.use(cors())

connectDB()
app.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
app.post('/createUser', async (req, res) => {
  const user = req.body
  console.log(req.body)
  const newUser = new UserModel(user)
  await newUser.save()
  res.json(user)
})
app.listen(3001, () => {
  console.log('Server is running :-) ')
})
