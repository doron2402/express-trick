let mwUsers = {};

mwUsers.validateSignupField = (req, res, next)  => {
  if (!req.body || (!req.body.email && !req.body.username) || !req.body.password) {
    return next('Missing Params');
  }
  return next();
};

module.exports = mwUsers;