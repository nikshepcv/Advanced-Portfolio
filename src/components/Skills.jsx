import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaVial,
  FaPython,
  FaCode
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiNpm,
  SiExpress,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title" data-aos="fade-up">Skills</h2>
      <p className="section-description" data-aos="fade-up">
        I've worked across the full-stack and artificial intelligence — combining code and cognition to build smart, scalable systems.
      </p>

      <div className="skills-grid">
        <div className="skill-card" data-aos="zoom-in">
          <h3 className="skill-title">Frontend</h3>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaJsSquare /> JavaScript (ES6+)</li>
            <li><FaReact /> React.js</li>
            <li><FaFigma /> Figma</li>
          </ul>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <h3 className="skill-title">Backend</h3>
          <ul>
            <li><FaNodeJs /> Node.js</li>
            <li><SiExpress /> Express.js</li>
            <li><SiMongodb /> MongoDB</li>
            <li><FaVial /> SQL Basics</li>
          </ul>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <h3 className="skill-title">Tools & Platforms</h3>
          <ul>
            <li><FaGitAlt /> Git & GitHub</li>
            <li><FaCode /> VS Code</li>
            <li><SiPostman /> Postman</li>
            <li><FaGithub /> GitHub Actions</li>
            <li><SiNpm /> NPM</li>
          </ul>
        </div>

        <div className="skill-card" data-aos="zoom-in">
          <h3 className="skill-title">AI & Data Science</h3>
          <ul>
            <li><FaPython /> Python</li>
            <li><SiTensorflow /> TensorFlow</li>
            <li><SiScikitlearn /> Scikit-learn</li>
            <li><SiPandas /> Pandas</li>
            <li><SiNumpy /> NumPy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
