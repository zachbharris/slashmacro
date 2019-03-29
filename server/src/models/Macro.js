const mongoose = require("mongoose");

const Macro = mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdOn: {
    type: Date,
    default: new Date()
  },
  content: String,
  description: String,
  title: String
});

module.exports = mongoose.model("Macro", Macro);
