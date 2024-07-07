import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import resume from '../../Resources/resume.pdf';

function Experience() {
  return (
    <>
    <Header />
    <div className="page">
      <h2>My Experience</h2>
      <div className="resume-content">
        <a
          href={resume}
          download="Danielle Croft Resume"
          target="_blank"
          rel="noreferrer"
          style={{color: "white"}}
        >Download Resume</a>
      </div>
      <h4>Below is a detailed list of the jobs I have held.</h4>
    </div>
    <Footer />
    </>
  );
}

export default Experience;
