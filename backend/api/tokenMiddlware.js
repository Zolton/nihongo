const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "Monkey Punch";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      //  Triggered if token invalid, or valid but expired - jwt.verify does a lot of great work behind the scenes
      if (error) {
        res.status(401).json({ Error: "Bad token" });
      } 
      else {
        // decoded token info = username + id, added to incoming request for backend convenience  
        // Makes it easier to find relevant user info in db since user_id is foreign key for tables, saves a db call to find it
        req.userInfo = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ Error: "No Token" });
  }
};