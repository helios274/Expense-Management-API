const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler((req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      res.status(404);
      throw new Error("Token is missing");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Token is invalid or expired");
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(404);
    throw new Error("Token is missing");
  }
});

module.exports = validateToken;
