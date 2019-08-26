const restful = require('node-restful');
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = restful.model('Users', userSchema);