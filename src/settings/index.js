let settings = {};
settings.env = (process.ENV && process.ENV.NODE_ENV) ? process.ENV.NODE_ENV : 'develop';
settings.config = require('./' + settings.env);
module.exports = settings;