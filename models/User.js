const mongoose = require('mongoose')
const UserShema = mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: Number,
    age: Number,
    email: String,
    password: String,
    created_at: {
        type:Date,
        default:Date.now }

})
module.exports =mongoose.model('user',UserShema);