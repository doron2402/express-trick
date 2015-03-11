let mongoose = require('mongoose');
let settings = require(__BASE + '/src/settings');
mongoose.connect(`mongodb://${settings.config.mongodb.host}/${settings.config.mongodb.db}`, (err) => {
    if (err) {
      throw err;
    }
    console.log('Connect to mongoDB');
});

let schemas = require(__BASE + '/src/schemas');

let models = {
  users: require('./users')
};
module.exports = models;