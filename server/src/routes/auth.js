const router = require("express").Router();
const jwt = require("jsonwebtoken");

// import models
const User = require("../models/User");

router.post("/google", (req, res) => {
  const { googleId, profileObj } = req.body;

  User.findOne({ googleId }).then(user => {
    // if the user exists
    if (user) {
      jwt.sign({ user }, "slashmacro", (err, token) => {
        res.json({ token });
      });
    } else {
      new User({
        firstName: profileObj.givenName,
        lastName: profileObj.familyName,
        googleId: googleId,
        photo: profileObj.imageUrl
      })
        .save()
        .then(newUser => console.log(newUser))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
