const mongoose = require("mongoose");

const User = mongoose.Schema({
  displayName: String,
  firstName: String,
  lastName: String,
  googleId: String,
  photo: String,
  macros: Array,
  createdOn: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("User", User);
