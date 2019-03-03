const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

// add cors to app
app.use(cors());

return (async function() {
  await require("./middleware/mongodb")(app);
  require("./middleware/sessions")(app);

  app.listen(port, () => console.log("Hello"));
})();
