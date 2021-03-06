var db = require("../models");

module.exports = function(app) {
  // Load main page to be the registration page
  app.get("/", function(req, res) {
    res.render("registration");
  });

  app.get("/registration", function(req, res) {
    res.render("registration");
  });
  // get chat room page
  app.get("/chat-room", function(req, res) {
    res.render("chat");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
