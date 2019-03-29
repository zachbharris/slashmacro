const User = require("../../models/User");
const Macro = require("../../models/Macro");

module.exports = {
  getMacros: (req, res) => {
    User.findById(req.user.id)
      .populate("macros")
      .then(res => {
        res.status(200).json(res);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
