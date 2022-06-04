const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "html");
app.use(express.static(path.join("src", "static")));

nunjucks.configure(["src/views/", "src/static/"], {
  autoescape: false,
  express: app,
});

app.use("/", require("../routes/MainRouter"))

module.exports.app = app;

