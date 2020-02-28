// Imports
const express = require("express")
const server = express ()
const helmet = require("helmet")
const cors = require("cors")
const jwt = require("jsonwebtoken")

// Global Middleware
const tokenCheck = require("./tokenMiddleware")

// Location of routers
const userRouter = require("../userRouterFolder/userRouter")
const mulChoiceRouter = require("../mulChoiceFolder/mulChoiceRouter")

// Global server settings
server.use(express.json())
server.use(helmet())
server.use(cors())

// Routers in use
server.use("/users", userRouter)
server.use("/quiz", tokenCheck, mulChoiceRouter)

server.get("/", (req, res) => {
    res.status(200).json({Hello: "from server"})
})

// Security risks:
// - userRouter & Helper, getAll

module.exports = server
