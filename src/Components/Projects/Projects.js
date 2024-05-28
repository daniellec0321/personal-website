import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Projects() {
  return (
    <>
    <Header />
    <div className="page">
      <h1>Projects Page</h1>
      <ul>
        <li>Hacking Freecell</li>
        <li>Bathroom Queueing</li>
        <li>AI project (face id)</li>
        <li>modern web dev project this one kinda sucked maybe dont include this one</li>
        <li>distsys project, distributed hash table</li>
        <li>neural net project handwriting recognition</li>
        <li>databases project</li>
        <li>paradigms project (this one was also bad)</li>
        <li>theory of computing things?</li>
        <li>data structures project, wordle solver</li>
        <li>embedded systems project that i did with sofia</li>
        <li>logic design project?</li>
        <li>fund comp final project maybe</li>
      </ul>
    </div>
    <Footer />
    </>
  );
}

export default Projects;
