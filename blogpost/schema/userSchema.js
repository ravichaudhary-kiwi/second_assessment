const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
        maxLength: 20,
    },

    email:{
        type: String,
        required:true,
        unique:true,
        },

    password:{
        type: String,
        minLength: 6,
        required: true,
    },

    phone:{
        type: String,
        minLength:9,
        maxLength: 15,
        required:true,
    },

    address:{
        type: String,
        minLength:4,
        maxLength:30,
        required:true,
    },

    created:{
        type: String,
        default:new Date(),
    },

     role:{
        type:String,
        default:"user",
     },
    },
      {
         timestamps:true,
    });

const model = mongoose.model('User',schema);
module.exports = model;