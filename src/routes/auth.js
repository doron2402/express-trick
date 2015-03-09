let express = require('express');
let authRoute = express.Router();

authRoute.get('/login', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

authRoute.post('/login', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

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