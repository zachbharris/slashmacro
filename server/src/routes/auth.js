const router = require("express").Router();

// import models
const User = require("../models/User");

// session
router.get("/sessions", (req, res) => {
  const session = req.session.id;
  User.findOne({ session }).then(user => {
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User session not found");
    }
  });
});

// google
router.post("/google", (req, res) => {
  const { googleId, profileObj } = req.body;

  User.findOne({ googleId }).then(user => {
    // if the user exists
    if (user) {
      User.updateOne({
        session: req.session.id
      }).then(updatedUser => res.send(updatedUser));
    } else {
      new User({
        firstName: profileObj.givenName,
        lastName: profileObj.familyName,
        googleId: googleId,
        photo: profileObj.imageUrl,
        session: req.session.id
      })
        .save()
        .then(newUser => res.send(newUser))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
