const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
app.listen(3001, () => {
  console.log('Server is running :-) ')
})
