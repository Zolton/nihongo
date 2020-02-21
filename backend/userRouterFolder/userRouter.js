const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const userFunc = require("./userHelper");

// base URL = /users

// router.get("/", (req, res) => {
//   res.status(200).json({ Hello: "Users are here" });
// });

router.post(
  "/register",
  userFunc.reqBodyCheck,
  userFunc.hashPassword,
  (req, res) => {
    const newUser = req.body;
    userFunc
      .addNewUser(newUser)
      .then(newU => {
        res.status(200).json(newU);
      })
      .catch(error500 => {
        res.status(500).json({
          Error: "Sorry, that email or username are already taken",
          error500
        });
      });
  }
);

// NB: Login requires client to send expiration of token
router.post("/login", userFunc.reqBodyCheck, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let expiration = req.body.expiration;
  userFunc
    .findUser(username)
    .then(user => {
      // Compare hashed user password to db hashed password
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = userFunc.generateToken(user, expiration);

        res.status(200).json({ token });
      } else {
        res.status(401).json({ Error: "Password fail" });
      }
    })
    .catch(error => {
      res.status(500).json({ Error: "Didn't get past findUser" });
    });
});

// userHelpers
// .updateLastLogin(userID)
// .then(updated =>{
//     res.status(200).json({Hello: "Quiz is here"})
// })
// .catch(error=>{
//     res.status(500).json({Error: "Could not update last login date"})
// })

module.exports = router;
