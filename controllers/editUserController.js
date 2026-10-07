const registationModel = require("../models/registationModel");

let editUserController = async (req, res) => {
  const { id } = req.params;
  await registationModel.findByIdAndUpdate(id, req.body,{new:true});
  res.send(req.body);
};

module.exports = editUserController;
