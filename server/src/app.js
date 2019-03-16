const express = require("express");
const cors = require("cors");

// import routes
const authRoutes = require("./routes/auth");

// invoke express application
const app = express();

// IP's allowed all access this server
let whitelist = ["http://localhost:3000", "http://127.0.0.1:3000"];

let corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// Cross-Origin Resource Sharing
app.use(cors(corsOptions));

// passport setup
require("./config/passport");

// set up routes
app.use("/auth", authRoutes);

app.listen(8000, () => {
  console.log("App now listening on port 8000");
  console.log("http://localhost:8000");
});
