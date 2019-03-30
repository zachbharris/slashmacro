const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// import our user model
const User = require("../models/User");

// import our strategies
require("./google")(passport);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
