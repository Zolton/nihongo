const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()
const userFunc = require("./quizHelpers")
const db = require("../database/db-config")

// base URL = /quiz

router.get("/", (req, res)=>{
    res.status(200).json({Hello: "Quiz is here"})
})



module.exports = router