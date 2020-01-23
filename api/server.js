// Imports
const express = require ("express")
const server = express ()
const helmet = require("helmet")
const cors = require("cors")
const jwt = require("jsonwebtoken")

// Location of routers
const userRouter = require("../userRouter/userRouter")

// Global server settings
server.use(express.json())
server.use(helmet())
server.use(cors())

// Routers in use
server.use("/users", userRouter)

server.get("/", (req, res) => {
    res.status(200).json({Hello: "from server"})
})

module.exports = server