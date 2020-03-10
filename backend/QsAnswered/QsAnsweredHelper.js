const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    // getAllQuestions,
    // getAllAnswers,
    // retrieveQuestionsAndAnswers,
    // answers,
    // shrinkAnswersIntoObject,
    // combineAnswerObjects,
    // removeRepetitionInFinalObject
  //   addNewUser,
  //   findUser,
  //   hashPassword,
  //   generateToken
  };

  function postCorrectAnswers (userID) {
      db("QuestionsAnsweredCorrectly").insert
  }