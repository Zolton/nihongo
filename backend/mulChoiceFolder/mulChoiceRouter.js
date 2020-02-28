const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()
const mulChoiceHelpers = require("./mulChoiceHelpers")
const userHelpers = require("../userRouterFolder/userHelper")
const db = require("../database/db-config")

// base URL = /quiz

router.get("/", (req, res)=>{
    const userID = req.body.userInfo.subject
    // userHelpers
    //     .then(updated =>{
    //         res.status(200).json({Hello: "Quiz is here"})
    //     })
    //     .catch(error=>{
    //         res.status(500).json({Error: "Could not update last login date"})
    //     })
})

router.get("/allquestions", (req, res)=>{
    mulChoiceHelpers
    .getAllQuestions()
    .then(questions=>{
        res.status(200).json(questions)
    })
})

router.get("/allanswers", (req, res)=>{
    mulChoiceHelpers
    .getAllAnswers()
    .then(answers=>{
        res.status(200).json(answers)
    })
})

router.get("/mulchoice", (req, res)=>{
    mulChoiceHelpers.
    questionsAndAnswers()
    .then(QandA=>{
        res.status(200).json(QandA)
    })
})

module.exports = router