const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      // User.findOrCreate({ googleId: profile.id }, function(err, user) {
      //   return done(err, user);
      // });

      User.findOne({ googleId: profile.id }, (err, user) => {
        if (user) {
          done(null, user);
        } else {
          new User({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            googleId: profile.id,
            username: profile.displayName,
            photo: profile.photos[0].value
          })
            .save()
            .then(newUser => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
