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
      <h4>This page is currently a work in progress. Come back soon to see my projects and patents! :D</h4>
      <div className="mainPageArticleContainer">
        <HashLink smooth to="/projects#patent" className="projects-patentLink">Patent</HashLink>
        <HashLink smooth to="/projects#personal-website" className="projects-patentLink">Personal Website</HashLink>
        <HashLink smooth to="/projects#hacking-freecell" className="projects-patentLink">Hacking Freecell</HashLink>
        <HashLink smooth to="/projects#restroom-queueing" className="projects-patentLink">Embedded System for Restroom Queue</HashLink>
        <HashLink smooth to="/projects#face-id" className="projects-patentLink">Face ID</HashLink>
        <HashLink smooth to="/projects#hashtable" className="projects-patentLink">Distributed HashTable</HashLink>
        <HashLink smooth to="/projects#signature" className="projects-patentLink">Genuine Signature Recognition</HashLink>
        <HashLink smooth to="/projects#database" className="projects-patentLink">Database for Cultivate Food Rescue</HashLink>
        <HashLink smooth to="/projects#wordle-solver" className="projects-patentLink">Wordle Solver</HashLink>
        <HashLink smooth to="/projects#arcade-game" className="projects-patentLink">Embedded System Arcade Game</HashLink>
        <HashLink smooth to="/projects#fpga-game" className="projects-patentLink">FPGA Adventure Game</HashLink>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
