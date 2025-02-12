//create express cuonfiguration file
const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");

module.exports = function expressConfig(app) {
  app.use(cors());
  app.use(express.urlencoded({ extended: true, limit: "50mb" })); // Increase payload size limit
  app.use(express.json({ limit: "50mb" })); // Increase payload size limit
  app.use(cookiesParser());
};
