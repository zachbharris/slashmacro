const mongoose = require("mongoose");

const User = mongoose.Schema({
  displayName: String,
  firstName: String,
  lastName: String,
  googleId: String,
  photo: String,
  macros: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Macro"
    }
  ],
  createdOn: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("User", User);
