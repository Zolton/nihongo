const knex = require("knex")
const knexConfig = require("../knexfile")

const dbENV = process.env.DB_ENV || "development"
module.exports = knex(knexConfig[dbENV])

// heroku addons:rename postgresql-sinuous-70465 nihongo2go-database -a nihongo2go