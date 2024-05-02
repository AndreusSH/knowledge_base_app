const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://andreus86:X2dzUel5PRMKdlhC@cluster0.wfk8fnc.mongodb.net/kb_app?retryWrites=true&w=majority&appName=Cluster0'
)
app.listen(3001, () => {
  console.log('Server is running :-) ')
})
