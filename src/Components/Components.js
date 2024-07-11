import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ScrollToTop } from "./../Common/Services/ScrollToTop.js";
import Main from "./Main/Main.js";
import Education from "./Education/Education.js";
import Projects from "./Projects/Projects.js";
import Experience from "./Experience/Experience.js";

function Components() {
    return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
}

export default Components;