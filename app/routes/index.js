const checkoutRoutes = require("./checkout.route");

//combine all the routes using a function and return the router
function combineRoutes(app) {
  app.use("/checkout", checkoutRoutes);
}

module.exports = combineRoutes;
