const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllQuestions,
  getAllAnswers,
  questions,
  answers
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

function answers (id) {
  return db("answers").where({question_id: id})
}

function questions (userDifficulty) {
  return db("questions").where({difficulty: userDifficulty})
}
  // return db("questions").where({difficulty: userDifficulty}).join("answers", "questions.id", "=", "answers.question_id")
  // Scrapped; resulting data object is too difficult to work with on front end.  Easier to just create an entirely different object

// addUserID takes user_id from decoded token, adds to user req body
// reqBodyCheck ensures all required fields are present
function addUserID(req, res, next) {
  req.body.user_id = req.userInfo.subject;
  next();
}