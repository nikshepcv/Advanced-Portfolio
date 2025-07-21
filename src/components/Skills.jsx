import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="overlay">
        <h2 className="glow-title">Skills</h2>
        <p className="skills-intro">
          I’ve worked across the full stack and artificial intelligence — combining
          code and cognition to build smart, scalable systems.
        </p>

        <h3>Frontend</h3>
        <ul className="skills-list">
          <li><FaHtml5 className="icon" /> HTML5</li>
          <li><FaCss3Alt className="icon" /> CSS3</li>
          <li><FaJs className="icon" /> JavaScript</li>
          <li><FaReact className="icon" /> React.js</li>
          <li><FaFigma className="icon" /> Figma</li>
        </ul>

        <h3>Backend</h3>
        <ul className="skills-list">
          <li><FaNodeJs className="icon" /> Node.js</li>
          <li><FaDatabase className="icon" /> MongoDB</li>
          <li><FaPython className="icon" /> Python</li>
        </ul>

        <h3>Tools</h3>
        <ul className="skills-list">
          <li><FaGitAlt className="icon" /> Git</li>
          <li><FaDatabase className="icon" /> MySQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
