// Projects.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'; // Optional: reuse shared styles

function Projects() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Me</NavLink>
        <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
        <NavLink to="/certificates" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Certificates</NavLink>
      </nav>

      <div className="projects-section">
        <h2>My Projects</h2>
        <div className="project-item">
          <h3>iDrated: Smart Water Jug</h3>
          <p>An IoT-based water tracking system using ESP32, sensors, and a mobile app.</p>
        </div>
        <div className="project-item">
          <h3>Material Monitoring System</h3>
          <p>Web-based app for monitoring materials at Hayakawa using PHP, SQL, and XAMPP.</p>
        </div>
        <div className="project-item">
          <h3>Jig Commitment Board</h3>
          <p>A local website to manage jig commitments in the production line.</p>
        </div>
        <div className="project-item">
          <h3>Andon Monitoring System</h3>
          <p>Helps track alerts/status in real-time for electronic manufacturing teams.</p>
        </div>
      </div>
    </header>
  );
}

export default Projects;
