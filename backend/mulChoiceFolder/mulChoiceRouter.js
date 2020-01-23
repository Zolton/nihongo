const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()
const mulChoiceHelpers = require("./mulChoiceHelpers")
const db = require("../database/db-config")

// base URL = /quiz

router.get("/", (req, res)=>{
    res.status(200).json({Hello: "Quiz is here"})
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



module.exports = router