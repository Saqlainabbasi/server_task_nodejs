const jwt = require("jsonwebtoken");
const TokenService = require("../services/token.service");
const { AppError } = require("../utils/errorClass");

const tokenService = new TokenService();

const authMiddleware = async (req, res, next) => {
  // Get the token from the request headers
  let access_token;
  // console.log(req.headers, "req.headers");
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    access_token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.access_token) {
    access_token = req.cookies?.access_token;
  }

  if (!access_token) {
    return next(new AppError("You are not logged in", 401));
  }

  try {
    // Verify the token
    const userData = await tokenService.verifyToken(access_token);
    // console.log(userData, "userData");

    // Attach the user data to the request
    req.user = userData;

    // Call the next middleware or route handler
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
