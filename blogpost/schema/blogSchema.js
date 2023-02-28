const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    date:{
        type:Date,
        default:Date.now(),
    },
    image: {
     type:String,
    },
},
{
    timestamps:true,
});
const model = mongoose.model('blogModel',schema);
module.exports = model;