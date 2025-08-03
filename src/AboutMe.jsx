import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Certificates from './Certificates.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './App.css';

function MainContent() {
  const roles = [
    "SOFTWARE ENGINEER",
    "WEB DEVELOPER",
    "APP DEVELOPER",
    "UI/UX DESIGNER",
    "QA TESTER"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (

  
    <header className="header">
      <nav className="nav-bar">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Me</NavLink>
        <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
        <NavLink to="/certificates" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Certificates</NavLink>
      </nav>

      <div className="header-left">
        <div className="header-text">
          <p className="intro-text">Hello World, I am...</p>
          <h1>Justen L. Nicanor</h1>
          <p className="subtitle">Aspiring <strong><em>
              <span className="role-wrapper">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    className="role-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {roles[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </em></strong>
</p>
        </div>
        <div className="header-photo">
          <img src="/profile1.png" alt="Justen Nicanor" className="profile-img" />
        </div>
      </div>

      <div className="about-container">
        I'm a Computer Engineering major in Software development graduate from Polytechnic University of the Philippines. I am passionate in development, especially in mobile app and websites. I’ve worked on projects combining hardware and software like smart hydration devices and mobile apps and I enjoy building practical solutions that improve everyday life. I'm always looking to learn, grow, and contribute to real-world tech challenges.
      </div>

      <a className="cv-button" href="/Justen-Nicanor-Resume.pdf" download="Justen-Nicanor-Resume.pdf">CV/RESUME</a>

      <div className="social-icons">
        <a href="https://github.com/JustenNicanor" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" />
          <span className="label">GitHub</span>
        </a>
        <a href="https://www.facebook.com/share/1CLmbedhmg/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.svg" alt="Facebook" />
          <span className="label">Facebook</span>
        </a>
        <a href="mailto:justenlnicanor@gmail.com">
          <img src="/gmail.svg" alt="Gmail" />
          <span className="label">Gmail</span>
        </a>
      </div>
    </header>
  );
}

function AboutMe() {
  return (
    <Router>
      <div className="header-wrapper">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AboutMe;
