import React, { useState, useEffect } from "react";

const baseURL = "https://nihongo2go.netlify.com/";

function HeaderLink() {
  return (
    <div>
      <a href={baseURL} className="navLink">
        Home Page
      </a>
      <a href={baseURL + "login"} className="navLink">
        Login
      </a>
      <a href={baseURL + "registration"} className="navLink">
        Registration
      </a>
      <a href={baseURL + "home"} className="navLink">
        Quizzes
      </a>
      <a href={baseURL + "about"} className="navLink">
        About Us
      </a>
      <a href={baseURL + "tos"} className="navLink">
        Terms Of Service
      </a>
      <a href={baseURL + "privacy"} className="navLink">
        Privacy Policy
      </a>
      <a href={baseURL + "contact"} className="navLink">
        Contact Us
      </a>
          <Link to="/" className="navLink">
        Registration
      </Link>
      <Link to="/login" className="navLink">
        Login
      </Link>
    </div>
  );
}

{
  /* <div className="navLinks">
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
          </Link> */
}

export default HeaderLink;
