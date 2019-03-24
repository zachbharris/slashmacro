const mongoose = require("mongoose");

const User = mongoose.Schema({
  firstName: String,
  lastName: String,
  googleId: String,
  photo: String
});

module.exports = mongoose.model("User", User);
