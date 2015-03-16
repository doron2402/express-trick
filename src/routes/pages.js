let express = require('express');
let pagesRoute = express.Router();
let mw = require(__BASE + '/src/middlewares');

pagesRoute.get('/', function(req, res){
  res.render('pages/home', {
    title: "Home",
    header: "Home Header"
  });
});

pagesRoute.get('/home', function(req, res){
  res.render('pages/home', {
    title: "Home",
    header: "Home Header"
  });
});

module.exports = pagesRoute;