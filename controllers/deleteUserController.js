const registationModel = require("../models/registationModel");

const deleteUserController = async (req, res) => {
//   console.log("successfully deleted", req.params);
    const { id } = req.params;

    await registationModel.findByIdAndDelete(id);
    res.send("user deleted successfully");
}

module.exports = deleteUserController;