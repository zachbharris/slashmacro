const mongoose = require("mongoose");

const User = mongoose.Schema({
  firstName: String,
  lastName: String,
  googleId: String,
  photo: String,
  session: String,
  macros: Array
});

module.exports = mongoose.model("User", User);
