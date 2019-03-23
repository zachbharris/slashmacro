const router = require("express").Router();
const passport = require("passport");

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  req.logout();
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.send(req.user);
  }
);

module.exports = router;
