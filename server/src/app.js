const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");

// invoke express application
const app = express();
const port = process.env.PORT || 8000;

// connect to mongodb
const db = mongoose.connection;
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true });
db.on("error", console.error.bind(console, "connection error"));
db.on("open", () => {
  console.log("mongoose connected");
});

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cookie parser
app.use(cookieParser());

// Cross-Origin Resource Sharing
app.use(cors());

app.use(
  expressSession({
    secret: keys.session.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      // max age, hours, minutes, seconds, milliseconds
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);

// set up routes
app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log("App now listening on port 8000");
  console.log("http://localhost:8000");
});
