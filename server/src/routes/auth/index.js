const router = require("express").Router();
const Google = require("./google");

// USER SESSION
router.get("/sessions", (req, res) => res.send(req.user));

// GOOGLE
router.get("/google", Google.Auth);
router.get("/google/redirect", Google.Redirect.Auth, Google.Redirect.Success);

// LOGOUT
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("logout");
});

module.exports = router;
