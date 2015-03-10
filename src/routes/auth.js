let express = require('express');
let authRoute = express.Router();
let mw = require(__BASE + '/src/middlewares');
let authController = require(__BASE + '/src/controllers').auth;

authRoute.get('/login', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

authRoute.post('/login', mw.auth.checkForEmailAndPasswordInBodyParams, authController.loginUser);

authRoute.get('/checkAuth', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

authRoute.get('/forgot', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

authRoute.post('/forgot', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

module.exports = authRoute;