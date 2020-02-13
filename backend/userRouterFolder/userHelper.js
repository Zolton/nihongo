const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  addNewUser,
  reqBodyCheck,
  hashPassword,
  generateToken,
  findUser,
  updateLastLogin
  //findUserEmail,
  //getAll,
};

// Middleware 

// Don't need to check for role, default is member.  Upgrades done on backend for now, admin accounts on front end in future
function reqBodyCheck(req, res, next) {
  if (req.body.username && req.body.password) {
    next();
  } else {
    res.status(400).json({ Error: "You are missing a required field" });
  }
}

function hashPassword (req, res, next) {
  let password = req.body.password
  let hash = bcrypt.hashSync(password, 5)
  password = hash
  req.body.password = password
  next()
}

function generateToken(user, expiration) {
  // Auto-inserted by jwt: iat/exp, "Issued at", and "expiration" dates in UTC time
  // jwt.verify automatically checks if expired
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

// DB calls

function addNewUser(newUser) {
  return db("users").insert(newUser);
}

function findUser (userName) {
  return db("users").where({username: userName}).first()
}

function updateLastLogin (userID) {
  let date = Date()
  return db("users").where({id: userID}).update({lastLogin: date})
}

// grab required data off .then promise
// function findUserEmail (userEmail) {
  //let findUser = 0
//   let response = db("users").where({email: userEmail}).then(findU=>findUser = findU)
//   console.log (response)
//  console.log(findUser)
//   return response
// }

// function getAll() {
//     return db("users");
//   }



