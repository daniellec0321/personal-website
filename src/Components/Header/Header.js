import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

function Header() {
  return (
    <nav>
        <h1><Link to="/" style={{color: "#18152e"}}>Danielle Croft</Link></h1>
        <ul>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="https://www.linkedin.com/in/danielle-croft-a5a2aa205/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/daniellec0321" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
    </nav>
  );
}

export default Header;
