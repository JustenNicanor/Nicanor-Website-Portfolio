// Skills.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Skills() {
  return (
    <header className="header">
      <nav className="nav-bar1">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Me</NavLink>
        <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
        <NavLink to="/certificates" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Certificates</NavLink>
      </nav>

      <div className="skills-grid">
        <div className="skills-container">
          <h3>Programming Languages</h3>
            <div className="icon-grid">
              <div className="icon-item"><img src="/icons/html.svg" alt="HTML" /><span>HTML</span></div>
              <div className="icon-item"><img src="/icons/css.svg" alt="CSS" /><span>CSS</span></div>
              <div className="icon-item"><img src="/icons/java.svg" alt="JavaScript" /><span>JavaScript</span></div>
              <div className="icon-item"><img src="/icons/python.svg" alt="Python" /><span>Python</span></div>
              <div className="icon-item"><img src="/icons/kotlin.svg" alt="Kotlin" /><span>Kotlin</span></div>
              <div className="icon-item"><img src="/icons/php.svg" alt="PHP" /><span>PHP</span></div>
              <div className="icon-item"><img src="/icons/react.svg" alt="React" /><span>React.js</span></div></div></div>

            <div className="skills-container">
              <h3>Databases</h3>
              <div className="icon-grid">
                <div className="icon-item"><img src="/icons/sql.svg" alt="MySQL" /><span>MySQL</span></div>
                <div className="icon-item"><img src="/icons/xampp.svg" alt="Xampp" /><span>Xampp</span></div>
                <div className="icon-item"><img src="/icons/firebase.svg" alt="Firebase" /><span>Firebase</span></div>
                <div className="icon-item"><img src="/icons/supabase.png" alt="Supabase" /><span>Supabase</span></div>

              </div>
            </div>

            <div className="skills-container">
              <h3>Development & Tools</h3>
              <div className="icon-grid">
                <div className="icon-item"><img src="/icons/androidstudio.svg" alt="Android Studio" /><span>Android Studio</span></div>
                <div className="icon-item"><img src="/icons/githubb.svg" alt="Github" /><span>Github</span></div>
                <div className="icon-item"><img src="/icons/visualstudio.svg" alt="Visual Studio" /><span>Visual Studio</span></div>
                <div className="icon-item"><img src="/icons/arduino.svg" alt="Arduino IDE" /><span>Ardduino IDE</span></div>
                <div className="icon-item"><img src="/icons/figma.svg" alt="Figma" /><span>Figma</span></div>
                <div className="icon-item"><img src="/icons/vercel.svg" alt="Vercel" /><span>Vercel</span></div>
              </div>
            </div>


        <div className="skills-container">
          <h3>Soft Skills</h3>
          <div className="soft-skills-list">
            <span>Communication</span>
            <span>Critical Thinking</span>
            <span>Problem Solving</span>
            <span>Teamwork</span>
            <span>Fast Learner</span>
            <span>Time Management</span>
            <span>English & Tagalog Fluency</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Skills;
