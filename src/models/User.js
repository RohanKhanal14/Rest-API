const mongoose = require('mongoose');

//creating tables in database 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'name is too short'],
        maxlength: [55, 'name is too long'],
        required: [true, 'Please enter your Name'],
        trim: true

    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Please enter your Email'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: true,
    }
});

const User = mongoose.model('User', userSchema);  //creating collection and exporting
module.exports = User;