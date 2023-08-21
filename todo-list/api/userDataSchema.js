const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    tasks: Array
});

const UserModel = mongoose.model('USERS', userSchema);

module.exports = UserModel;