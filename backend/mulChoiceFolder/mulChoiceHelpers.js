const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllQuestions,
  getAllAnswers,
  questions,
  answers,
  shrinkAnswersIntoObject,
  combineAnswerObjects,
  removeRepetitionInFinalObject
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
  //return db("questions").where({difficulty: userDifficulty})
  return db("answers").join("questions", "questions.id", "=", "answers.question_id").where({difficulty: userDifficulty})
}
  // return db("questions").where({difficulty: userDifficulty}).join("answers", "questions.id", "=", "answers.question_id")
  // Scrapped; resulting data object is too difficult to work with on front end.  Easier to just create an entirely different object

// addUserID takes user_id from decoded token, adds to user req body
// reqBodyCheck ensures all required fields are present
function addUserID(req, res, next) {
  req.body.user_id = req.userInfo.subject;
  next();
}

function shrinkAnswersIntoObject (object) {
  let answersArray = []
  let i = 0
  // Create an answer object
  for (i = 0; i < object.length; i++) {
    // Combine answer information into a single object
    answersArray.push({
      answer: object[i].answer, 
      correct_answer: object[i].correct_answer, 
      question_id: object[i].question_id
    })
    // Push new object onto existing object
    object[i].answer = answersArray
    answersArray = []
  }
  return object
}

function combineAnswerObjects (object) {
  let i = 0
  for (i = 0; i < object.length-1; i++) {
    // If the questions are the same
    if (object[i].id == object[i+1].id) {
      // Pop off answer object ahead
      let temp = object[i+1].answer.pop()
      // Add to current answer object
      object[i].answer.push(temp)
      // Copy current answer object on the one ahead
      object[i+1].answer = object[i].answer
      // Inverse solution, copying *current* answer onto one ahead, doesn't work bc when it becomes current & there's now two answer objects, 
      // .pop only works on one answer object.  Would need a while loop, with O^2 runtime, for each object to move them all ahead
    }
  }
  return object
}

// Could do this at end of combineAnswerObjects if CPU cycles are a concern, 
// but as a best practice (and to help future-me when reviewing old code), I prefer a function do one thing and only one thing

function removeRepetitionInFinalObject (object) {
  // Start with object[0] in finalObject just in case there's only 1 element in the object
  let finalObject = [object[0]]
  let i = 0
  for (i=0; i < object.length-1; i++) {
    if (object[i].id !== object[i+1].id) {
      finalObject.push(object[i+1])
    }
  }
  //object.map(x=>console.log("test", x))
  // console.log(final)
 return finalObject
}
