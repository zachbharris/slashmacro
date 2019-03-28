const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("auth");
});

module.exports = router;
