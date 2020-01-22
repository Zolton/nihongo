const express = require ("express")
const server = express ()
const helmet = require("helmet")
const cors = require("cors")
const jwt = require("jsonwebtoken")

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
    res.status(200).json({Hello: "from server"})
})

module.exports = server