const Macro = require("../../../models/Macro");

const GetAll = (req, res) =>
  Macro.find()
    .all()
    .then(macros => res.send(macros))
    .catch(err => res.send(err));

module.export = {
  GetAll
};
