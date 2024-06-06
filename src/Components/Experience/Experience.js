import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import fileSaver from 'file-saver';

const saveFile = () => {
  fileSaver.saveAs(
    "../Header/Header.js",
    "resume.js"
  );
}
// <button className="resume" onClick={saveFile}>Download Resume</button>

function Experience() {
  return (
    <>
    <Header />
    <div className="page">
      <h2>My Experience</h2>
      <div className="resume-content">
        <a href="../../resources/resume.pdf">Download CV</a>
      </div>
      <h4>Below is a detailed list of the jobs I have held.</h4>
    </div>
    <Footer />
    </>
  );
}

export default Experience;
