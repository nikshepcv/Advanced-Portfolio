import React from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-image-wrapper">
          <img src={profile} alt="Profile" />
        </div>

        <h1>Hello, I'm <span>Nikshep C. V.</span></h1>
        <h2>Full Stack Developer</h2>

        <p className="intro-text">
          Building responsive and intelligent apps with React, Node.js & AI.
        </p>

        <div className="home-details">
          <p>
            I'm a creative and detail-oriented developer with a strong background in
            full stack web development and artificial intelligence. My expertise includes
            modern frameworks like React and Express.js, and I'm passionate about crafting
            seamless, user-focused digital experiences.
          </p>
          <p>
            With a Master's in Artificial Intelligence and hands-on experience in both
            frontend and backend development, I bridge the gap between UI design and
            robust architecture. I thrive on building scalable solutions that are both
            functional and beautiful.
          </p>
          <p>
            Outside of coding, I'm an avid learner, sports enthusiast, and open-source
            contributor who enjoys solving complex problems and collaborating with diverse teams.
          </p>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/nikss_official?igsh=bWk4NXZyaWJiOXgz" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.facebook.com/nikshep.gowda.niks" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://github.com/nikshepcv" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>

        <a href="#contact" className="cta-button">
          Let's Connect
        </a>
      </div>
    </section>
  );
}

export default Home;
