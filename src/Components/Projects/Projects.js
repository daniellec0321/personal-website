import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
    <Header />
    <div className="page">
      <h2>My Projects & Patents</h2>
      <h4>This page is currently a work in progress. Come back soon to see my projects and patents! :D</h4>
      <div className="mainPageArticleContainer">
        <HashLink smooth to="/projects#patent" className="projects-patentLink">Patent</HashLink>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
