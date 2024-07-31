import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HashLink } from 'react-router-hash-link';

function Projects() {
  return (
    <>
    <Header />
    <div className="page">
      <h2>My Projects & Patents</h2>
      <HashLink smooth to='/projects/#test' className="project-button"> History </HashLink>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
