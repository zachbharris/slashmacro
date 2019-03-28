const router = require("express").Router();
const passport = require("passport");

router.get("/sessions", (req, res) => {
  res.send(req.user);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.send(req.user);
  }
);

module.exports = router;
