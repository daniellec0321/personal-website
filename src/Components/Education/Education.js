import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Education() {
  return (
    <>
    <Header />
    <div className="page">
      <h2>My Education</h2>
      <h4>I got my Bachelors of Science in Computer Science at the University of Notre Dame, as well as a minor in Liturgical Music. Below is a list of all the classes I took.</h4>
      <div className="education-content">

        <div className="education-section">
          <h6>Senior Spring Semester</h6>
          <ul>
            <li>Computer Security</li>
            <li>Embedded Systems Development</li>
            <li>Introduction to Quantum Computing</li>
            <li>Chinese Ways of Thought</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Senior Fall Semester</h6>
          <ul>
            <li>Intro to AI</li>
            <li>Modern Web Development</li>
            <li>Programming Challenges</li>
            <li>Ethical & Professional Issues</li>
            <li>Music Theory III</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Junior Spring Semester</h6>
          <ul>
            <li>Design of Algorithms</li>
            <li>Distributed Systems</li>
            <li>Neural Networks</li>
            <li>Probability and Statistics</li>
            <li>Music Theory II</li>
            <li>Liturgy Across Time & Traditions</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Junior Fall Semester</h6>
          <ul>
            <li>Database Concepts</li>
            <li>Operating Systems</li>
            <li>Programming Paradigms</li>
            <li>Theory of Computing</li>
            <li>Music Theory I</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Sophomore Spring Semester</h6>
          <ul>
            <li>Database Structures</li>
            <li>Computer Architecture</li>
            <li>Intro to Embedded Systems and the Internet of Things</li>
            <li>Holy Communion and Christian Disunity</li>
            <li>Ritual Studies</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Sophomore Fall Semester</h6>
          <ul>
            <li>Sysytems Programming</li>
            <li>Logic Design</li>
            <li>Linear Algebra & Differential Equations</li>
            <li>Introduction to Philosophy</li>
            <li>Foundations of Theology</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Freshman Spring Semester</h6>
          <ul>
            <li>Fundamentals of Computing</li>
            <li>Discrete Mathematics</li>
            <li>Calculus III</li>
            <li>Physics II: Electromagnetism</li>
            <li>Organized Crime in Africa</li>
          </ul>
        </div>

        <div className="education-section">
          <h6>Freshman Fall Semester</h6>
          <ul>
            <li>Engineering Discernment</li>
            <li>Engineering Programming</li>
            <li>Introduction to Chemical Principles</li>
            <li>Calculus II</li>
            <li>Writing and Rhetoric</li>
            <li>History of China to 1644</li>
          </ul>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Education;
