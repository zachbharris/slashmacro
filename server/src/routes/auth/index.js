const router = require("express").Router();
const passport = require("passport");

// GET USER SESSION
router.get("/sessions", (req, res) => res.send(req.user));

// GOOGLE AUTH
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

// GOOGLE REDIRECT
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(301, "http://localhost:3000");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("logout");
});

module.exports = router;
