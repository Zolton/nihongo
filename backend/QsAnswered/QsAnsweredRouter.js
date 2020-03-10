const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// base URL = /answers

router.post("/periodic", (req, res)=>{
    let userID = req.body.subject
    console.log(req.body)
})


module.exports = router;