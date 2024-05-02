const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})