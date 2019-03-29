const User = require("../../models/User");
const Macro = require("../../models/Macro");

module.exports = {
  getAllMacros: (req, res) => {
    res.send(req.user.id);
  },
  newMacro: (req, res) => {
    const macro = new Macro(req.body);

    User.findById(req.user.id)
      .then(user => {
        macro.createdBy = user;
        macro.save().then(() => {
          user.macros.push(macro);
          user.save().then(updatedUser => {
            res.status(201).json(macro);
          });
        });
      })
      .catch(err => res.json(err));
  }
};
