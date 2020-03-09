const db = require("../database/db-config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllQuestions,
  getAllAnswers,
  retrieveQuestionsAndAnswers,
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

function retrieveQuestionsAndAnswers (userDifficulty) {
  return db("questions").join("answers", "answers.question_id", "=", "questions.id").where({difficulty: userDifficulty})
}

// addUserID takes user_id from decoded token, adds to user req body
// reqBodyCheck ensures all required fields are present
function addUserID(req, res, next) {
  req.body.user_id = req.userInfo.subject;
  next();
}

// Takes answers off joined table object, compress into a single array that's easier to pass around
function shrinkAnswersIntoObject (object) {
  let answersArray = []
  let i = 0
  for (i = 0; i < object.length; i++) {
    // Combine answer information into a single object
    answersArray.push({
      answer_id: object[i].id,
      answer: object[i].answer, 
      correct_answer: object[i].correct_answer, 
      question_id: object[i].question_id
    })
    // NB: Renamed key is plural "answers", as opposed to original key, "answer"
    object[i].answers = answersArray
    
    // Delete old keys from object - they're copied into the new answer array, not needed outside it
    delete object[i].correct_answer
    delete object[i].answer
    delete object[i].id
    delete object[i].created_at
    delete object[i].updated_at
    answersArray = []
  }
  //console.log("object after change is: ", object.answers)
  return object
}

// Combines all answers for a question into a single array for each question - each question now contains all possible answers within itself
      // Inverse solution, copying *current* answer onto one ahead, doesn't work bc when it becomes current & there's now two answer objects, 
      // .pop only works on one answer object.  Would need a while loop, with O^2 runtime, for each object to move them all ahead
function combineAnswerObjects (object) {
  let i = 0
  for (i = 0; i < object.length-1; i++) {
    // If the questions are the same
    if (object[i].question_id == object[i+1].question_id) {
      // Pop off answer object ahead
      let temp = object[i+1].answers.pop()
      // Add to current answer object
      object[i].answers.push(temp)
      // Copy current answer object on the one ahead
      object[i+1].answers = object[i].answers
    }
  }
  return object
}

// Could do this at end of combineAnswerObjects if CPU cycles are a concern, 
// but as a best practice (and to help future-me when reviewing old code), I prefer a function do one thing and only one thing

// Removes duplicate questions & answers
function removeRepetitionInFinalObject (object) {
  
  // Start with object[0] in finalObject just in case there's only 1 element in the object
  let finalObject = [object[0]]
  let i = 0
  for (i=0; i < object.length-1; i++) {
    if (object[i].question_id !== object[i+1].question_id) {
      finalObject.push(object[i+1])
    }
  }
 return finalObject
}
