require("dotenv").config();
const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const config = require("./firebase");
const routes = require("../routes/MainRouter");
const Product = require("../models/product");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "html");
app.use(express.static(path.join("src", "static")));

app.use("/api", routes);

nunjucks.configure(["src/views/", "src/static/"], {
  autoescape: false,
  express: app,
});

app.use("/", routes)

module.exports.app = app;

