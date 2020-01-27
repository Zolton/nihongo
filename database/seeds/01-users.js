const bcrypt = require("bcryptjs")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "admin", password: bcrypt.hashSync("admin", 5), email: "abc@123.com", role: "admin" },
        { username: "Calvin", password: bcrypt.hashSync("abc123", 5), role: "member" },
        { username: "Hobbes", password: bcrypt.hashSync("abc123", 5), role: "member" }
      ]);
    });
};