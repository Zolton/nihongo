const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  addNewUser,
  reqBodyCheck,
  hashPassword,
  generateToken,
  //findUser,
  //findUserEmail,
  //getAll,
};

// Middleware 

function reqBodyCheck(req, res, next) {
  if (req.body.username && req.body.password && req.body.role) {
    next();
  } else {
    res.status(400).json({ Error: "You are missing a required field" });
  }
}

function hashPassword (req, res, next) {
  let password = req.body.password
  let hash = bcrypt.hashSync(password, 5)
  password = hash
  next()
}

function generateToken(user, expiration) {
  // Only user ID and username are on token
  const payload = {
    subject: user.id,
    name: user.username,
    role: user.role
  };
  const secret = process.env.SECRET || "Monkey Punch";
  const options = {
    expiresIn: expiration || "1d"
  };
  return jwt.sign(payload, secret, options);
}

function hashPassword(req, res, next) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;
  next();
}

// Misc

// function findUser (userName) {
//   return db("users").where({username: userName}).first()
// }

// function findUserEmail (userEmail) {
//   let response = db("users").where({email: userEmail})
//   console.log (response)
//   return response
// }


// DB calls

function addNewUser(newUser) {
  return db("users").insert(newUser);
}

function login(user) {
  return db("users")
}

// function getAll() {
//     return db("users");
//   }



