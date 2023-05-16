const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
    user: String,
    password: String
});
module.exports = mongoose.model("User", User);
