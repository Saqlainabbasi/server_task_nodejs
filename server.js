const express = require("express");
const environment = require("./configs/environment");
const expressConfig = require("./configs/express.config");
const combineRoutes = require("./app/routes");
// const connectDB = require("./configs/db.config");s
const errorHandler = require("./app/utils/errorHandler");
const app = express();
const port = environment.server.port;

expressConfig(app);

combineRoutes(app);

app.get("/api", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome 😂😂👈👈",
  });
});

app.use(errorHandler);

app.listen(port, () => {
  // connectDB();
  console.log(`Server running at port:${port}/`);
});

module.exports = app;
