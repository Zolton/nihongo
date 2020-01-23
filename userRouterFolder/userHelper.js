const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAll
//   addNewUser,
//   findUser,
//   hashPassword,
//   generateToken
};

function getAll() {
    return db("users")
}