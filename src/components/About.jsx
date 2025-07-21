// File: src/components/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="about-container">
        <h2 className="section-title glitch-text animate-title" data-text="About Me">
          About Me
        </h2>

        <p className="about-intro">
          I’m <span className="highlight">Nikshep C. V.</span>, a passionate <strong>Full Stack Developer</strong> with a creative spark and a solid background in <strong>Artificial Intelligence</strong>. I love transforming ideas into powerful, user-friendly, and visually stunning web applications that inspire.
        </p>

        <div className="about-grid">
          <div className="about-box neon-box" data-aos="fade-right">
            <h3>🧠 Smart Thinker</h3>
            <p>
              With a Master’s degree in AI, I bring analytical depth and problem-solving skills into every project. I craft intelligent systems, predictive tools, and dynamic features that enhance functionality beyond the usual.
            </p>
          </div>

          <div className="about-box neon-box" data-aos="fade-left">
            <h3>💻 Full Stack Engineer</h3>
            <p>
              I architect scalable apps using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. I enjoy building robust APIs, seamless UIs, and performance-optimized solutions that adapt across devices.
            </p>
          </div>

          <div className="about-box neon-box" data-aos="fade-right">
            <h3>🎨 Creative Coder</h3>
            <p>
              My frontend work is driven by aesthetics and UX precision. From motion effects to theme-rich design, I aim to give users an experience — not just a website. I draw design inspiration from futuristic and metaverse visuals.
            </p>
          </div>

          <div className="about-box neon-box" data-aos="fade-left">
            <h3>🚀 Curious Innovator</h3>
            <p>
              I’m always exploring the next big thing — be it <strong>Next.js</strong>, <strong>GraphQL</strong>, or <strong>Cloud-native development</strong>. I thrive on learning, experimenting, and applying cutting-edge tech to solve real-world problems.
            </p>
          </div>

          <div className="about-box neon-box" data-aos="fade-right">
            <h3>🌍 Collaborator & Leader</h3>
            <p>
              I enjoy working in diverse teams, mentoring peers, and sharing knowledge. Whether it's open-source or production-grade codebases, I focus on clean communication and scalable design patterns.
            </p>
          </div>

          <div className="about-box neon-box" data-aos="fade-left">
            <h3>🎯 My Vision</h3>
            <p>
              To build tech that’s <strong>meaningful, intuitive, and impactful</strong>. I want every user interaction with my apps to feel smooth, immersive, and delightful — where functionality meets elegance.
            </p>
          </div>
        </div>

        <p className="about-outro" data-aos="zoom-in">
          Outside of coding, I’m an avid sports enthusiast, fitness lover, and design geek who enjoys nature, tech podcasts, and collaborating on exciting ideas. Let’s build something awesome together!
        </p>
      </div>
    </section>
  );
}

export default About;
