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
      <HashLink smooth to='/projects#test' className="project-button">This button should go to the hashlink.</HashLink>
      <h6 id="test">Here is the hashlink.</h6>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
