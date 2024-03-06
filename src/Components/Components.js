import React from "react";
import Main from "./Main/Main.js";
import Education from "./Education/Education.js";
import Projects from "./Projects/Projects.js";
import Resume from "./Resume/Resume.js";
import "../App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Routing for our app. */
function Components() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    );
}

export default Components;