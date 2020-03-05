const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const mulChoiceHelpers = require("./mulChoiceHelpers");
const userHelpers = require("../userRouterFolder/userHelper");
const db = require("../database/db-config");

// base URL = /quiz

router.get("/", (req, res) => {
  const userID = req.body.userInfo.subject;
  // userHelpers
  //     .then(updated =>{
  //         res.status(200).json({Hello: "Quiz is here"})
  //     })
  //     .catch(error=>{
  //         res.status(500).json({Error: "Could not update last login date"})
  //     })
});

router.get("/allquestions", (req, res) => {
  mulChoiceHelpers.getAllQuestions().then(questions => {
    res.status(200).json(questions);
  });
});

router.get("/allanswers", (req, res) => {
  mulChoiceHelpers.getAllAnswers().then(answers => {
    res.status(200).json(answers);
  });
});

router.get("/mulchoice/:difficulty", (req, res) => {
  let questionsTable = {};
  let answersTable = [];
  let final = [];

  let userDifficulty = req.params.difficulty;
  // Fetch relevant questions
  mulChoiceHelpers
  .questions(userDifficulty)
  .then(questions => {
    questionsTable = questions
    //console.log("questions", questions)
    // Separate out response into individual objects
    questions
    .map(singleQuestion =>
      mulChoiceHelpers
        // Send each indiv id to fetch only relevant responses
        .answers(singleQuestion.id)
        .then(answersResponse =>
          answersResponse[0].question_id == singleQuestion.id
            ? ((singleQuestion.answer = answersResponse),
              final.push(singleQuestion)
              // This is the only place it returns, need to tell it to wait
              //console.log("final", final)
              )
            : (null)
            
            //console.log("final", final)
        )
        .then(test=>res.status(200).json(final))
        
        //console.log("final", final)
    )
    
    
    //console.log("final", final)
    
  })
  
})

//   mulChoiceHelpers
//   .questions(userDifficulty)
//   .then(questions => {
//     questionsTable = questions
//     // questionsTable.map(singleQuestion=>mulChoiceHelpers.answers(singleQuestion.id))
//     // Separate out response into individual objects

//   })
//   .then(secondStep=>
//     questionsTable.map(singleQuestion=>mulChoiceHelpers.answers(singleQuestion.id)
    
//     ))
//     .then(test=>console.log("second step", test))
//   //console.log("test1", questionsTable)
//   //.then(questionsTable.map(singleQuestion=>mulChoiceHelpers.answers(singleQuestion.id)))
//   //.then(asdf=>console.log("test2", questionsTable))
//   //console.log("questions", questions)
//   //console.log("final", final)
// });

module.exports = router;

// mulChoiceHelpers
//   .questions(userDifficulty)
//   .then(questions => {
//     questionsTable = questions
//     console.log("questions", questions)
//     // Separate out response into individual objects
//     questions
//     .map(singleQuestion =>
//       mulChoiceHelpers
//         // Send each indiv id to fetch only relevant responses
//         .answers(singleQuestion.id)
//         .then(answersResponse =>
//           answersResponse[0].question_id == singleQuestion.id
//             ? ((singleQuestion.answer = answersResponse),
//               final.push(singleQuestion), 
//               // This is the only place it returns, need to tell it to wait
//               console.log("final", final))
//             : (null),
//             //console.log("final", final)
//         ),
//         //console.log("final", final)
//     )
//     //console.log("final", final)
    
//   })