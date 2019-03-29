const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

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

User.plugin(findOrCreate);

module.exports = mongoose.model("User", User);
