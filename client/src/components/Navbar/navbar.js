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
            <ul className="dropdown-content">
                <li>
                  <Link 
                    to="/" 
                    className={
                      window.location.pathname === "/" || window.location.pathname === "/about"
                        ? "nav-link active"
                        : "nav-link"
                    } 
                  >
                    About    
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={
                      window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                    } 
                  >
                    Contact    
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className={
                      window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
                    } 
                  >
                    Portfolio    
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resume" 
                    className={
                      window.location.pathname === "/resume" ? "nav-link active" : "nav-link"
                    } 
                  >
                    Resume    
                  </Link>
                </li>
                <li><a href="https://www.linkedin.com/in/andrew-lawn-78a1013b">LinkedIn</a></li>
                <li><a href="https://github.com/Lawna12">GitHub</a></li>
            </ul>
        </div>
    </nav> 
  );
}
