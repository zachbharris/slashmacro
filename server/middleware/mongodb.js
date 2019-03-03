require("dotenv").config();
const mongoose = require("mongoose");

module.exports = function(app) {
  return new Promise((resolve, reject) => {
    // connect to mongo
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });

    // grab the connection
    const db = mongoose.connection;

    db.on("error", err => {
      console.log(err, "Something went wrong");
      return reject();
    });
    db.on("open", () => {
      console.log("MongoDB connected");
      return resolve();
    });
  });
};
