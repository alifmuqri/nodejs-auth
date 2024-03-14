const express = require("express"),
  routes = express.Router();
const userController = require("./controller/user-controller");
const passport = require("passport");

routes.get("/", (req, res) => {
  return res.send("Hello, this is the API!");
});

module.exports = routes;
