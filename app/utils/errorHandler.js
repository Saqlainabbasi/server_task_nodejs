const { logError } = require("./logger");

function errorHandler(err, req, res, next) {
  logError(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.statusCode || 500);
  res.send({
    success: false,
    message: err.message || "Server Error occurred",
  });
  // err.status = err.status || "error";
  // err.statusCode = err.statusCode || 500;

  // res.status(err.statusCode).json({
  //   status: err.status,
  //   message: err.message,
  // });
}

module.exports = errorHandler;
