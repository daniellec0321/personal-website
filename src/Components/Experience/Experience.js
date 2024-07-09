import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import resume from '../../Resources/resume.pdf';

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
      <h4>Below is a detailed list of the jobs I have held.</h4>

      <div className="resume-section">
        <h2>University of Notre Dame - <i>Teaching Assistant for Systems Programming</i></h2>
        <p style={{color: "lightgray"}}>January 2023 - May 2023, January 2024 - May 2024</p>
        <br />
        <h4>Systems Programming is a sophomore-level computer science class where students take a deep dive into Bash, Python, and C programming.
          As a TA, I would hold office hours for 4 hours a week to assist students on their weekly readings and homeworks. I would also grade their homeworks
          using GitHub. Lastly, I attended class with them so I could keep track of what they had been learning that week.</h4>
        <br />
        <h4>The first section of the class focused on Bash, and the students learned how to manipulate the Linux-style terminal to keep track 
          of their files and data. The second section centered around Python, with the goal being for the students to master the convenience
          of Python in its data structures and socket programming. The last section of the class was based around C, with a focus on learning
          memory-management skills and file manipulation. Along with these three topics, this class also functioned as an introduction to Git.
          Students did their readings and homeworks on different branches and created pull requests on GitHub to turn them in. The TAs would
          then comment on their work and merge the pull request into their master branch in order to grade their assignments.</h4>
      </div>

      <div className="resume-section">
        <h2>University of Notre Dame - <i>Teaching Assistant for Operating Systems</i></h2>
        <p style={{color: "lightgray"}}>August 2023 - December 2023</p>
        <br />
        <h4>Operating Systems is a junior-level computer science class where students learn how an operating system functions. As a TA, I would
          hold office hours for 2 hours a week to help with their readings, homeworks, and projects. I would also grade their assignments using
          GitHub. Lastly, I attended class with them so I could keep track of what they had been learning that week.</h4>
        <br />
        <h4>While this class did not have distinct sections like Systems Programming, there were four main topics that the students focused on.
          The first topic pertained to scheduling, and the students learned how an operating system decides which jobs to run. At the end of this
          section, the students were assigned a project where they had to make a "shortest-job first" and "round-robin" scheduler. The second section
          focused on concurrency and how an OS can run multiple jobs at once while preserving mutual exclusion. The section culminated in a project
          where the students had two threads pulling jobs from a singular queue and running them without causing any race conditions, deadlock, etc.
          The third section of the class focused on virtual memory; how an OS keeps track of data with segmentation, paging, etc. The project pertatining
          to this section asked the students to write their own version of the C functions <i>malloc</i>, <i>calloc</i>, <i>realloc</i>, 
          and <i>free</i> using the system call <i>sbrk</i> and other functions like <i>memset</i> and <i>memcpy</i>. The students also had to decrease 
          internal and external fragmentation by keeping track of freespace in the heap using a circular doubly-linked list. The last section of
          the class focused on the filesystem. FINISH THIS!!!!!
        </h4>
      </div>

      <div className="resume-section">
        <h2>USAA - <i>Software Engineering Intern</i></h2>
        <p style={{color: "lightgray"}}>May 2023 - August 2023</p>
      </div>

      <div className="resume-section">
        <h2>University of Notre Dame - <i>Teaching Assistant for Logic Design</i></h2>
        <p style={{color: "lightgray"}}>January 2022 - December 2022</p>
      </div>

      <div className="resume-section">
        <h2>Johnson & Johnson - <i>Project Intern</i></h2>
        <p style={{color: "lightgray"}}>May 2022 - August 2022</p>
      </div>

    </div>
    <Footer />
    </>
  );
}

export default Experience;
