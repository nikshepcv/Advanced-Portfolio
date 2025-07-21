import React, { useState } from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    category: "AI/ML Projects",
    title: "Character Recognition System",
    description: "Used TensorFlow and Keras to recognize Devanagari script characters.",
    tech: "Python, TensorFlow, Keras"
  },
  {
    category: "AI/ML Projects",
    title: "COVID-19 Detection using ML",
    description: "Built predictive models using patient data for COVID-19 diagnosis.",
    tech: "Python, Scikit-learn, Pandas"
  },
  {
    category: "AI/ML Projects",
    title: "Phishing Website Detection",
    description: "Implemented an ANN-based model to detect phishing websites.",
    tech: "Python, Keras, Scikit-learn"
  },
  {
    category: "React Projects",
    title: "Weather Forecast App",
    description: "Real-time weather forecasts using Open-Meteo & Nominatim APIs.",
    tech: "React.js, Vite, react-chartjs",
    github: "https://github.com/nikshepcv/Deployment-Level-2",
    demo: "https://weatherappreactupdated.netlify.app/"
  },
  {
    category: "React Projects",
    title: "FLICK-LIST – Movie Listing App",
    description: "OMDB-powered app for browsing and managing movie watchlists.",
    tech: "HTML5, CSS3, JavaScript, OMDB API",
    github: "https://github.com/nikshepcv/Flick-list_movie",
    demo: "https://flicklistmovie.netlify.app/"
  },
  {
    category: "React Projects",
    title: "Rock-paper-scissor Game",
    description: "Classic hand game implemented using modern web stack.",
    tech: "React.js",
    github: "https://github.com/nikshepcv/Rock-Paper-Scissor-Game",
    demo: "https://rock-paper-scissior.netlify.app/"
  },
  {
    category: "Frontend Projects",
    title: "Calculator",
    description: "A responsive calculator with BODMAS logic for advanced operations.",
    tech: "HTML5, CSS3, JavaScript",
    github: "https://github.com/nikshepcv/Web-Calculator",
    demo: "https://nikshepcv.github.io/Web-Calculator/"
  },
  {
    category: "Frontend Projects",
    title: "Image Carousel",
    description: "An image slider with transitions and responsive autoplay features.",
    tech: "HTML5, CSS3, JavaScript",
    github: "https://github.com/nikshepcv/Image-Slider",
    demo: "https://nikshepcv.github.io/Image-Slider/"
  },
  {
    category: "Frontend Projects",
    title: "Music Player",
    description: "Music player with track list, playback speed, and volume control.",
    tech: "HTML5, CSS3, JavaScript",
    github: "https://github.com/nikshepcv/Music-Player",
    demo: "https://nikshepcv.github.io/Music-Player/"
  }
];

const filters = ["All", "AI/ML Projects", "React Projects", "Frontend Projects"];

function Projects() {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selected);

  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <div className="projects-container">
        <h2 className="section-title glitch-text" data-text="Projects">Projects</h2>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${selected === filter ? "active" : ""}`}
              onClick={() => setSelected(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                className="project-card neon-box"
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech">Tech Used: {project.tech}</p>
                {project.github && project.demo && (
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Code"
                    >
                      <FaGithub className="project-icon" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="project-icon" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
