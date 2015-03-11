let mongoose = require('mongoose');
let usersSchema = require(__BASE + '/src/schemas').users;
let userModel = mongoose.model('User', usersSchema);
let hash = require(__BASE + '/src/adapters').password.hash;

userModel.authenticateByUsername = (args, cb) => {
  console.log('authenticateByUsername');
  if (!args.username || !args.password) {
    return cb('Missing Arguments');
  }
  userModel.findOne({'username': args.username}, (err, user) => {
    if (err || !user) {
      return cb(err);
    }
    hash(args.password, user.salt, (err, salt, password) => {
      if (err) {
        return cb(err);
      }
      if (password === user.password)
      {
        console.log('Auth Successfully');
        return cb(null, user);
      }else {
        console.log('Auth Wrong.!');
        return cb('Authentication Fail');
      }
    });
  });
};

userModel.createNewUser = (args, cb) => {
  console.log('create new user');
  return cb();
};

module.exports = userModel;