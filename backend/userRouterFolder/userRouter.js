const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()
const userFunc = require("./userHelper")
const db = require("../database/db-config")

// base URL = /users

router.get("/", (req, res)=>{
    res.status(200).json({Hello: "Users are here"})
})

router.get("/all", (req, res)=>{
    userFunc
    .getAll()
    .then(users=>{
        res.status(200).json(users)
    })
})



module.exports = router