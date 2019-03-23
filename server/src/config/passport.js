const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("./keys");
const User = require("../models/User");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  // find user by id
  User.findById(id).then(user => {
    done(null, id);
  });
});

// Google authentication w/ PassportJS
passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate(
        {
          googleId: profile.id
        },
        (err, user) => {
          return done(err, user);
        }
      );
    }
  )
);
