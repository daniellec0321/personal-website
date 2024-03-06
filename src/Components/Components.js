import React from "react";
import Main from "./Main/Main.js";
import "../App.css"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

/* Routing for our app. */
function Components() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    );
}

export default Components;