import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import resume from '../../resources/resume.pdf';

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

      <div className="resume-section">
        <h2>University of Notre Dame - <i>Teaching Assistant for Systems Programming</i></h2>
        <p style={{color: "lightgray", fontStyle: "italic"}}>South Bend, Indiana</p>
        <p style={{color: "lightgray"}}>January 2023 - May 2023, January 2024 - May 2024</p>
        <br />
        <h4>Systems Programming is a sophomore-level computer science class where students take a deep dive into Bash, Python, and C programming.
          As a TA, I would hold office hours for 4 hours a week to assist students on their weekly readings and homeworks. I would also grade their homeworks
          using GitHub. Lastly, I attended class with them so I could keep track of what they had been learning that week.</h4>
      </div>

      <div className="resume-section">
        <h2>University of Notre Dame - <i>Teaching Assistant for Operating Systems</i></h2>
        <p style={{color: "lightgray", fontStyle: "italic"}}>South Bend, Indiana</p>
        <p style={{color: "lightgray"}}>August 2023 - December 2023</p>
        <br />
        <h4>Operating Systems is a junior-level computer science class where students learn how an operating system functions. As a TA, I would
          hold office hours for 2 hours a week to help with their readings, homeworks, and projects. I would also grade their assignments using
          GitHub. Lastly, I attended class with them so I could keep track of what they had been learning that week.</h4>
      </div>

      <div className="resume-section">
        <h2>USAA - <i>Software Engineering Intern</i></h2>
        <p style={{color: "lightgray", fontStyle: "italic"}}>San Antonio, Texas</p>
        <p style={{color: "lightgray"}}>May 2023 - August 2023</p>
        <br />
        <h4>I joined a team that focused on modernizing API calls that were used
          in the call center. The work involved making sure that the new controllers that we used created the exact same results as the classic
          controllers. Near the middle of my internship, I discovered a large discrepancy between the two controllers with the origin of the issue
          being linked to the differences in security. After that, I spent the rest of my time focusing on fixing this discrepancy between all the
          controllers that I could.
        </h4>
      </div>

      <div className="resume-section">
        <h2>University of Notre Dame - <i>Teaching Assistant for Logic Design</i></h2>
        <p style={{color: "lightgray", fontStyle: "italic"}}>South Bend, Indiana</p>
        <p style={{color: "lightgray"}}>January 2022 - December 2022</p>
        <br />
        <h4>Logic Design is a sophomore-level computer science class that was designed to be a stepping stone into computer architecture. 
          The students learned the basics of how a computer works through being taught binary math, clocks, registers, basic assembly
          instructions, etc. As a TA, I would hold office hours for 2 hours a week to assist with their homeworks and would also grade 
          their homeworks and projects. During my second semester as a TA, I became the "head" TA, with the added responsibility of deciding
          who grades what and making sure all of the grades are published to the students on time.
          </h4>
      </div>

      <div className="resume-section">
        <h2>Johnson & Johnson - <i>Project Intern</i></h2>
        <p style={{color: "lightgray", fontStyle: "italic"}}>Milpitas, California</p>
        <p style={{color: "lightgray"}}>May 2022 - August 2022</p>
        <br />
        <h4>I joined a team working on a specific piece of hardware in the vision sector of J&J. During my internship, I focused on solving a
          singular problem. There was a stepper motor where when it began moving and stopped moving, it would cause vibrations throughout the machine.
          My project was to figure out how to make the stepper motor move while causing very little amounts of vibration. My mentor and I
          accomplished this by having the stepper motor accelerate into its configured speed instead of going that speed immediately. However, the
          challenging part about this project was that the instructions for the stepper motor was stored on an almost-full FPGA, so the algorithm
          for this acceleration needed to be extremely simple. We ended up creating an algorithm that approximated an S-curve using powers of two,
          so that it could be simple enough for the FPGA to compile. The algorithm was created using LabView and is currently in the process of
          receiving a patent.
        </h4>
      </div>

    </div>
    <Footer />
    </>
  );
}

export default Experience;
