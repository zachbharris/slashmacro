// https://console.developers.google.com

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// import our user model
const User = require("../../models/User");

const Google = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/redirect"
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
          done(err, user);
        });
      }
    )
  );
};

module.exports = Google;
