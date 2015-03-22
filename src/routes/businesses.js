let express = require('express');
let businessesRoutes = express.Router();

businessesRoutes.get('/businesses/signup', function(req, res) {
  res.render('businesses/signup', {
    title: "Signup",
    header: "Signup your club!"
  });
});

module.exports = businessesRoutes;