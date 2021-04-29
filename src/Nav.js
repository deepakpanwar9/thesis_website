import React from "react";
import "./Nav.css";
import company_logo from "./company_logo.png"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navigation__bar">
      <span className="company__logo"><img src={company_logo} alt="it's company logo"/></span>
      <ul className="nav-links">
        <Link to="/">
          <li className="nav-links_name">Home</li>
        </Link>
        <Link to="/Myblog">
          <li className="nav-links_name">My Blog</li>
        </Link>
        <Link to="/About">
          <li className="nav-links_name">About</li>
        </Link>
        <Link to="/Contact">
          <li className="nav-links_name">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
