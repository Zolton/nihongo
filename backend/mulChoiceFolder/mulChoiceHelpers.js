const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllQuestions,
  getAllAnswers,
  questionsAndAnswers
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

function questionsAndAnswers () {
  return db("questions").join("answers", "questions.id", "=", "answers.question_id")
}

// addUserID takes user_id from decoded token, adds to user req body
// reqBodyCheck ensures all required fields are present
function addUserID(req, res, next) {
  req.body.user_id = req.userInfo.subject;
  next();
}