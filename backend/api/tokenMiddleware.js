const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "Monkey Punch";
const helperFunc = require("../userRouterFolder/userHelper")

// guarnateed expired token for later - create better error messages for user: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1ODMxNzQ1OTMsImV4cCI6MTU4MzE3ODE5M30.2DQZbmzU9lvZHNfdmM7h8d6ufSFDyBeHpF2UpcaXYps

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      //  Triggered if token invalid, or valid but expired - jwt.verify does a lot of great work behind the scenes
      if (error) {
        // console.log("test", error)
        const errorInfo = {
          name: error.name,
          message: error.message
        }
        if (error.message == "jwt expired") {
          return res.status(401).json({ Error: "Your session has expired, please log in again"})
        }
        if (error.message == "invalid token") {
          return res.status(401).json({Error: "Your credentials are not valid.  Please log in again"})
        }
        if (error.message == "invalid signature") {
          return res.status(401).json({Error: "This token is not valid.  Please log in again"})
        }
        if (error.message == "jwt malformed") {
          return res.status(401).json({Error: "This is not a valid token.  Please log in again"})
        }
        else {
          helperFunc
          .errorLogging(errorInfo)
          .then(response=>{
            res.status(418).json({Error: "There are known unknowns and unknown unknowns.  This is the latter."})
          })
          
        }
      } 
      else {
        // Decoded token info = username + id, added to incoming request for backend convenience  
        // Makes it easier to find relevant user info in db since user_id is foreign key for tables, saves a db call to find it
        req.body.userInfo = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ Error: "No Token" });
  }
};