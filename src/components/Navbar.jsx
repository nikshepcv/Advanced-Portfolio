import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

import {
  HiHomeModern,
  HiUserCircle,
  HiMiniEnvelope,
  HiFolderOpen,
  HiBars3BottomRight,
  HiXMark,
  HiWrenchScrewdriver,
  HiDocumentText
} from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home", icon: <HiHomeModern /> },
    { to: "/about", label: "About", icon: <HiUserCircle /> },
    { to: "/projects", label: "Projects", icon: <HiFolderOpen /> },
    { to: "/skills", label: "Skills", icon: <HiWrenchScrewdriver /> },
    { to: "/resume", label: "Resume", icon: <HiDocumentText /> },
    { to: "/contact", label: "Contact", icon: <HiMiniEnvelope /> }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Nikshep Logo" className="logo-img" />
        </Link>

        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? "active-link" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="icon">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <HiXMark /> : <HiBars3BottomRight />}
        </div>
      </div>

      {/* Optional overlay behind mobile menu */}
      {isOpen && <div className="mobile-overlay" onClick={toggleMenu} />}
    </header>
  );
};

export default Navbar;
