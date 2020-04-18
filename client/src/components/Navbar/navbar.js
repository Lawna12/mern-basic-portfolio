import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
  return (
    <nav className="navbar" id="myNavbar">
      <Link id="fixed" to="/">Andrew Lawn</Link>
        <div className="dropdown">
          <button className="dropbtn">Menu
              <i class="fa fa-caret-down"></i>
          </button>
            <div className="dropdown-content">
                <a href="./index.html">About</a>
                <a href="./contact.html">Contact</a>
                <a href="./portfolio.html">Portfolio</a>
                <a href="./resume.html">Resume</a>
                <a href="https://www.linkedin.com/in/andrew-lawn-78a1013b">LinkedIn</a>
                <a href="https://github.com/Lawna12">GitHub</a>
            </div>
        </div>
    </nav> 
  );
}
