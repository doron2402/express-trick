let mongoose = require('mongoose');
let usersSchema = require(__BASE + '/src/schemas');
let userModel = mongoose.model('UserModel', usersSchema);
module.exports = userModel;