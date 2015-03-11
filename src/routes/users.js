let express = require('express');
let usersRoute = express.Router();
let mw = require(__BASE + '/src/middlewares');
// Dummy users
let users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

usersRoute.get('/', function(req, res){
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});

usersRoute.get('/users', function(req, res) {
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});

usersRoute.get('/signup', (req, res) => {
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});

// usersRoute.post('/signup', mw.users.validateSignupField, usersController.postSignup);

module.exports = usersRoute;