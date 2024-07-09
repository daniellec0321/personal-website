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
          className="resume"
        >Download Resume</a>
      </div>
      <h4>Below is a detailed list of the jobs I have held.</h4>

      <div className="resume-section">
        <h2>University of Notre Dame - <i style={{padding: "0%"}}>Teaching Assistant for Systems Programming</i></h2>
        <p style={{color: "lightgray"}}>January 2023 - May 2023, January 2024 - May 2024</p>
      </div>

      <div className="resume-section">
        <h2>University of Notre Dame - <i style={{padding: "0%"}}>Teaching Assistant for Operating Systems</i></h2>
        <p style={{color: "lightgray"}}>August 2023 - December 2023</p>
      </div>

      <div className="resume-section">
        <h2>USAA - <i style={{padding: "0%"}}>Software Engineering Intern</i></h2>
        <p style={{color: "lightgray"}}>May 2023 - August 2023</p>
      </div>

      <div className="resume-section">
        <h2>University of Notre Dame - <i style={{padding: "0%"}}>Teaching Assistant for Logic Design</i></h2>
        <p style={{color: "lightgray"}}>January 2022 - December 2022</p>
      </div>

      <div className="resume-section">
        <h2>Johnson & Johnson - <i style={{padding: "0%"}}>Project Intern</i></h2>
        <p style={{color: "lightgray"}}>May 2022 - August 2022</p>
      </div>

    </div>
    <Footer />
    </>
  );
}

export default Experience;
