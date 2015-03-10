let authController = {};
let auth = require('express-mongoose-auth');
let UserModel = require(__BASE + '/src/models').users;

authController.loginUser = (req, res, next) => {
  auth.loginUser(req, res, {
    email: req.body.email,
    password: req.body.password,
    default_redirect: '/',
    user_model: UserModel
  }, function(err) {
    if(err) {
      if(err.type == 'AuthenticationFailure') {
        res.status(400).send('denied'); // or however you'd handle that
      } else {
        res.status(500).send('whoops');
      }
    }
  });
};

module.exports = authController;