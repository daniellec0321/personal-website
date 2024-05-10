import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

function Header() {
  return (
    <nav>
        <h2>Danielle Croft</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
        </ul>
    </nav>
  );
}

export default Header;
