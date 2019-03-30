const router = require("express").Router();
const passport = require("passport");

const Google = require("./google");

// GET USER SESSION
router.get("/sessions", (req, res) => res.send(req.user));

// GOOGLE AUTH
router.get("/google", Google.Auth);

// GOOGLE REDIRECT
router.get("/google/redirect", Google.Redirect.Auth, Google.Redirect.Success);

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("logout");
});

module.exports = router;
