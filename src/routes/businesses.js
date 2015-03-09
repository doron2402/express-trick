let express = require('express');
let businessesRoutes = express.Router();

// Dummy users
let businesses = [
  { name: 'tobi', business_id: '123' },
  { name: 'loki', business_id: 'kjn123' },
  { name: 'jane', business_id: 'ja395a' }
];

businessesRoutes.get('/businesses', function(req, res) {
  res.render('businesses', {
    businesses: businesses,
    title: "EJS example",
    header: "Some businesses"
  });
});

module.exports = businessesRoutes;