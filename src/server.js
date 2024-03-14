const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/config");
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello! The API is at http://localhost:" + port + "/api");
});

const routes = require("./routes.json");
app.use("/api", routes);

app.listen(port);
