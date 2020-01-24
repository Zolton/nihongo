import React, { useState, useEffect } from "react"

function HeaderLink () {
    return (
        <div><a href="http://localhost:3000/" className="navLink">
        Home Page
      </a>
      <a href="http://localhost:3000/login" className="navLink">
        Login
      </a>
      <a href="http://localhost:3000/registration" className="navLink">
        Registration
      </a>
      <a href="http://localhost:3000/home" className="navLink">
        Quizzes
      </a>
      <a href="http://localhost:3000/about" className="navLink">
        About Us
      </a>
      <a href="http://localhost:3000/tos" className="navLink">
        Terms Of Service
      </a>
      <a href="http://localhost:3000/privacy" className="navLink">
        Privacy Policy
      </a>
      <a href="http://localhost:3000/contact" className="navLink">
        Contact Us
      </a>
      </div>
    )
}


export default HeaderLink