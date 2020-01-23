// Imports
const express = require ("express")
const server = express ()
const helmet = require("helmet")
const cors = require("cors")
const jwt = require("jsonwebtoken")

// Location of routers
const userRouter = require("../userRouter/userRouter")
const quizRouter = require("../mulChoiceQuizRouter/quizRouter")

// Global server settings
server.use(express.json())
server.use(helmet())
server.use(cors())

// Routers in use
server.use("/users", userRouter)
server.use("/quiz", quizRouter)

server.get("/", (req, res) => {
    res.status(200).json({Hello: "from server"})
})

module.exports = server