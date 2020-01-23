const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllQuestions,
  getAllAnswers
//   addNewUser,
//   findUser,
//   hashPassword,
//   generateToken
};

function getAllQuestions() {
    return db("questions")
}

function getAllAnswers() {
    return db("answers")
}