const router = require("express").Router();

// import models
const Macro = require("../../models/Macro");
const User = require("../../models/User");

// USER
router.get("/user/macros", (req, res) => {
  if (!req.user) {
    return res.status(500).send("You must be logged in");
  }

  return User.findById(req.user.id)
    .populate("macros")
    .then(user => res.status(200).send(user.macros))
    .catch(err => res.status(500).send(err));
});

// MACROS
router.get("/macros", (req, res) => {
  Macro.find((err, macros) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(macros);
  });
});

router.post("/macros", (req, res) => {
  const { title, description, content } = req.body;
  const id = req.user.id;

  if (!req.user) return res.status(401).send("Sign in to create macros");
  return User.findById(id).then(user => {
    new Macro({
      createdBy: user,
      title,
      description,
      content
    })
      .save()
      .then(newMacro => {
        user.macros.push(newMacro);
        user
          .save()
          .then(updatedUser => res.send(updatedUser))
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  });
});

module.exports = router;
