const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //An authorization object will be sent in the HTTP header, so check this
  //Ex: Bearer jjawdioj
  //Ex: Bearer [token]
  //Check for the authorization header and make sure it's a bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify and decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from the token, assign it to req.user (since this is a middleware function) without including the password property
      req.user = await User.findById(decoded.id).select("-password");

      //Call the next piece of middleware (?)
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
