const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const User = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  googleId: {
    type: String,
    select: false
  },
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
