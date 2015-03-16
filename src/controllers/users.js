let usersController = {};
let UserModel = require(__BASE + '/src/models').users;

usersController.postCreateUser = (req, res) => {
  UserModel.createNewUser(req.body).then((resp) => {
    return res.send({code: 'ok', user: {username: resp.username}});
  }).catch(err => {
    console.log(err);
    return res.send({"code": 'err'}).code(400);
  });
};

module.exports = usersController;