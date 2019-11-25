const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Name = mongoose.model("Name", nameSchema);

module.exports = Name;
