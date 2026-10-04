const registationModel = require("../models/registationModel");

const allUserController = async (req, res) => {
  let allUsers = await registationModel.find({});
  res.send(allUsers);
};

module.exports = allUserController;
