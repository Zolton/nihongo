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

{/* <div className="navLinks">
          <a
            href="https://design-your-life-home.netlify.com/"
            className="navLink"
          >
            Home Page
          </a>
          <Link to="/" className="navLink">
            Registration
          </Link>
          <Link to="/login" className="navLink">
            Login
          </Link>
          <Link to="/design" className="navLink">
            Your Journal Entries
          </Link> */}

export default HeaderLink