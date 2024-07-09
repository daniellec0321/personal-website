import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.js";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
    <Header />
    <div className="page">
      <div style={{margin: "2rem"}}>
        <h2>My name is Danielle Croft, and this is my personal website!</h2>
        <h4 style={{textAlign: "justify"}}>I am a recent graduate from the University of Notre Dame with a major in Computer Science. On this website, I'll share about myself, my education, and my coding projects.</h4>
      </div>
      <div className="mainPageArticleContainer">
        <Link to="/education" className="educationLink">Education</Link>
        <Link to="/experience" className="experienceLink">Experience</Link>
        <Link to="/projects" className="projectsLink">Projects</Link>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Main;
