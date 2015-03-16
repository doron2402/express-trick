let settings = {};
const ENVIRONMENTS = ['develop', 'stage', 'production'];
settings.env = (process.ENV && process.ENV.NODE_ENV && ENVIRONMENTS.indexOf(process.ENV.NODE_ENV) !== -1) ? process.ENV.NODE_ENV : 'develop';
settings.config = require('./' + settings.env);
module.exports = settings;