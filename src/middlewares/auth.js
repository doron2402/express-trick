let mwAuth = {};
//Check for email and password
mwAuth.checkForEmailAndPasswordInBodyParams = (req, res, next)  => {
  if (!req.body || (!req.body.email && !req.body.username) || !req.body.password) {
    return next('Missing Params');
  }
  return next();
};

module.exports = mwAuth;