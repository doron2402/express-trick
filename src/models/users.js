let mongoose = require('mongoose');
let auth = require('express-mongoose-auth');
let usersSchema = require(__BASE + '/src/schemas').users;
auth.makeAuthable(usersSchema);
let userModel = mongoose.model('User', usersSchema);
module.exports = userModel;