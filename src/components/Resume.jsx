import React from "react";
import "./Resume.css";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section className="resume-page" id="resume" data-aos="fade-up">
      <div className="overlay">
        <h2 className="glow-title">Resume</h2>

        <p className="resume-description">
          Want to know more about my background, skills, and experience? Download my resume and explore everything I've worked on so far.
        </p>

        <a
          href="/Nikshep_Resume.pdf"
          download
          className="resume-button"
          data-aos="fade-up"
        >
          <FaDownload className="download-icon" />
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
