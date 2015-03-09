if (!global.__BASE && !module.parent){
  global.__BASE = __dirname;
}
require('babel/register');
var settings = require(__BASE + '/src/settings');
require(__BASE + '/src/app');
