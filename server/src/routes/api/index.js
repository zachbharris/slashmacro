const router = require("express").Router();

const Macros = require("./Macros");
const User = require("./User");

router.get("/macros", Macros.getAllMacros);
router.post("/macros", Macros.newMacro);

module.exports = router;
