// utils/logger.js
const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/error.log");

const logError = (message) => {
  //   console.log("Error: ", message);
  const logMessage = `${new Date().toISOString()} - ERROR: ${
    message.stack || message
  }\n`;
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });
};

module.exports = {
  logError,
};
