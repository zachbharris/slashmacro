const passport = require("passport");

const Auth = passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login"]
});

const Redirect = {
  Auth: passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`
  }),
  Success: (req, res) => res.redirect(process.env.CLIENT_URL)
};

module.exports = {
  Auth,
  Redirect
};
