import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'; // Reuse shared styles

function Certificates() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Me</NavLink>
        <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
        <NavLink to="/certificates" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Certificates</NavLink>
      </nav>

      <div className="projects-section">
        <h2>My Certificates</h2>
        <div className="project-item">
          <h3>Responsive Web Design</h3>
          <p>Issued by freeCodeCamp — June 2024</p>
          <a href="https://www.freecodecamp.org/certification/your-username/responsive-web-design" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="project-item">
          <h3>Front-End Development by Meta</h3>
          <p>Issued by Coursera — July 2024</p>
          <a href="https://coursera.org/verify/your-certificate-link" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
        <div className="project-item">
          <h3>Mobile App Development with Kotlin</h3>
          <p>Issued by Udemy — August 2024</p>
        </div>
        {/* Add more certificate blocks as needed */}
      </div>
    </header>
  );
}

export default Certificates;
