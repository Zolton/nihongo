import React from "react";
import { Link } from "react-router-dom"
import registration from "../Login/Registration"

const baseURL = "https://nihongo2go.netlify.com/";

function HeaderLink() {
  return (
    <div>
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to={"/registration"} className="navLink">
        Registration
      </Link>
      <Link to="/login" className="navLink">
        Login
      </Link>
      <Link to="/about" className="navLink">
        About Us
      </Link>
      <Link to="/contact" className="navLink">
        Contact Us
      </Link>
      <Link to="/home" className="navLink">
        Quizzes
      </Link>
      <Link to="/tos" className="navLink">
        Terms of Service
      </Link>
      <Link to="/privacy" className="navLink">
        Privacy Policy
      </Link>
      <Link to="/dmca" className="navLink">
        DMCA
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
