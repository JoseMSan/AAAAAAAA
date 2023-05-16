const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Card = new Schema({
    nombre: String,
    personalidad: String,
    especie: String,
    cumple: String,
    lema: String,
    hobbie: String,
    color: String,
    user: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "user",
        },
});
module.exports = mongoose.model("Card", Card);
