const express = require("express");
const routes = require("./routes/index");
const morganMiddleware = require("./middlewares/morganLogger");
require("dotenv").config;

const app = express();

app.use(express.json());
app.use(morganMiddleware);
app.use(routes);

module.exports = app;
