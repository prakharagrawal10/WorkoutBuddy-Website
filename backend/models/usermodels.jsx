const mongoose  = require("mongoose")
const schema = mongoose.Schema


const userschema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
},{timestamps:true});

module.exports = mongoose.model('user',userschema)
