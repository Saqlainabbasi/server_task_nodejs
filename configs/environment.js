require("dotenv").config();
// Load environment variables from the appropriate .env file

module.exports = (() => {
  //database env values
  let uri;
  if (process.env.NODE_ENV === "development") {
    uri = process.env.DEV_DB_URI;
  } else {
    uri = process.env.PRO_DB_URI;
  }

  const environment = {
    server: {
      port: process.env.PORT || 3001,
    },
    database: {
      uri: uri,
    },
  };
  return environment;
})();
