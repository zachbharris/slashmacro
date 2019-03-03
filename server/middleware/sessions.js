const session = require("express-session");

module.exports = function(app) {
  const config = {
    secret: "keyboard cat",
    cookie: {
      maxAge: 28800000
    },
    resave: true,
    saveUninitialized: true
  };

  if (app.get("env") === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  }

  app.use(session(config));
};
