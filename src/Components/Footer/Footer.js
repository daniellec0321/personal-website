import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <IconContext.Provider value={{ color: 'white', size: 70}}>
            <Link to="https://www.linkedin.com/in/danielle-croft-a5a2aa205/" target="_blank" rel="noreferrer"><FaLinkedin className="footer-element"/></Link>
            <Link to="https://www.github.com/daniellec0321" target="_blank" rel="noreferrer"><FaGithub className="footer-element"/></Link>
        </IconContext.Provider>
    </div>
  );
}

export default Footer;
