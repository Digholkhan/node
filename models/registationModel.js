const mongoose = require("mongoose");
const {Schema} = mongoose;

const registationSchema = new Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("Registation", registationSchema);