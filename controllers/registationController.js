const registationModel = require("../models/registationModel");

let registationController = (req, res) => {
  const { username, email, password } = req.body;

  let user = new registationModel({
    username: username,
    email: email,
    password: password,
  });
  user.save();
  res.send(user);
};

module.exports = registationController;
