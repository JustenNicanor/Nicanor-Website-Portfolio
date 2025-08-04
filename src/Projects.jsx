import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

import img1 from './idrated/project1-1.jpg';
import img2 from './idrated/project1-2.jpg';
import img3 from './idrated/project1-3.jpg';
import img4 from './idrated/project1-4.jpg';
import img5 from './idrated/project1-5.jpg';
import img6 from './idrated/project1-6.jpg';
import img7 from './idrated/project1-7.jpeg';
import img8 from './idrated/project1-8.jpeg';

import gado1 from './gado/gado1-1.png';
import gado2 from './gado/gado1-2.png';
import gado3 from './gado/gado1-3.png';
import gado4 from './gado/gado1-4.png';
import gado5 from './gado/gado1-5.png';
import gado6 from './gado/gado1-6.png';





import andon1 from './andon/andon1-1.png';
import andon2 from './andon/andon1-2.png';
import andon3 from './andon/andon1-3.png';
import andon4 from './andon/andon1-4.png';


import material1 from './mms/mms1-1.png';
import material2 from './mms/mms1-2.png';
import material3 from './mms/mms1-3.png';
import vault1 from './arch/arch1-1.png';
import vault2 from './arch/arch1-2.png';
import vault3 from './arch/arch1-3.png';
import vault4 from './arch/arch1-4.png';
import vault5 from './arch/arch1-5.png';







function Projects() {
  const idratedImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const gadoImages = [gado1, gado2, gado3, gado4, gado5, gado6];
  const andonImages = [andon1, andon2, andon3, andon4];
  const materialImages = [material1, material2, material3];
  const vaultImages = [vault1, vault2, vault3,vault4, vault5 ];

  const [currentIdrated, setCurrentIdrated] = useState(0);
  const [currentGado, setCurrentGado] = useState(0);
  const [currentAndon, setCurrentAndon] = useState(0);
  const [currentMaterial, setCurrentMaterial] = useState(0);
  const [currentVault, setCurrentVault] = useState(0);

  // Auto slides
  useEffect(() => {
    const idratedInterval = setInterval(() => {
      setCurrentIdrated((prev) => (prev + 1) % idratedImages.length);
    }, 3000);
    const gadoInterval = setInterval(() => {
      setCurrentGado((prev) => (prev + 1) % gadoImages.length);
    }, 3000);
    const andonInterval = setInterval(() => {
      setCurrentAndon((prev) => (prev + 1) % andonImages.length);
    }, 3000);
    const materialInterval = setInterval(() => {
      setCurrentMaterial((prev) => (prev + 1) % materialImages.length);
    }, 3000);
    const vaultInterval = setInterval(() => {
      setCurrentVault((prev) => (prev + 1) % vaultImages.length);
    }, 3000);

    return () => {
      clearInterval(idratedInterval);
      clearInterval(gadoInterval);
      clearInterval(andonInterval);
      clearInterval(materialInterval);
      clearInterval(vaultInterval);
    };
  }, [idratedImages.length, gadoImages.length, andonImages.length, materialImages.length, vaultImages.length]);

  return (
    <div>
      <header className="header2">
        <nav className="nav-bar2">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Me</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
        </nav>
      </header>

      <section className="projects-section">
        <div className="projects-wrapper">

          {/* iDrated Project */}
          <div className="project-container">
            <div className="project-images">
              <div className="image-slider" style={{ transform: `translateX(-${currentIdrated * 100}%)` }}>
                {idratedImages.map((img, index) => (
                  <img key={index} src={img} alt={`iDrated ${index + 1}`} className="project-image" />
                ))}
              </div>
            </div>
            <div className="project-description">
              <h3>iDrated</h3>
              <p>An IoT-based hydration system with an ESP32-powered jug and Android app. Tracks water intake,
                temperature, and includes a UV sterilization feature. Developed using Firebase, Kotlin, and ultrasonic sensors.</p>
            </div>
          </div>

          {/* Gado Project */}
          <div className="project-container">
            <div className="project-images">
              <div className="image-slider" style={{ transform: `translateX(-${currentGado * 100}%)` }}>
                {gadoImages.map((img, index) => (
                  <img key={index} src={img} alt={`Gado ${index + 1}`} className="project-image" />
                ))}
              </div>
            </div>
            <div className="project-description">
              <h3>Gado</h3>
              <p>A mobile budgeting app built with Kotlin and Firebase. Gado helps users monitor their daily spending,
                set financial goals, and manage budgets with real-time updates and insights.</p>
            </div>
          </div>

          {/* Website Projects */}
          <div className="web-projects-wrapper">

            {/* Andon Monitoring System */}
            <div className="web-project-container">
              <div className="project-images-web">
                <div className="image-slider-web" style={{ transform: `translateX(-${currentAndon * 100}%)` }}>
                  {andonImages.map((img, index) => (
                    <img key={index} src={img} alt={`Andon ${index + 1}`} className="project-image-web" />
                  ))}
                </div>
              </div>
              <div className="web-project-description">
                <h3>Andon Monitoring System</h3>
                <p>A real-time shop floor monitoring system for reporting machine or process issues. Built with PHP, MySQL, and XAMPP it helps improve manufacturing efficiency.</p>
              </div>
            </div>

            {/* Material Monitoring System */}
            <div className="web-project-container">
              <div className="project-images-web">
                <div className="image-slider-web" style={{ transform: `translateX(-${currentMaterial * 100}%)` }}>
                  {materialImages.map((img, index) => (
                    <img key={index} src={img} alt={`Material ${index + 1}`} className="project-image-web" />
                  ))}
                </div>
              </div>
              <div className="web-project-description">
                <h3>Material Monitoring System</h3>
                <p>A local inventory management tool that tracks material availability and usage. Developed using PHP, MySQL, and XAMPP to enhance factory logistics.</p>
              </div>
            </div>

            {/* ArchiTech Vault */}
            <div className="web-project-container">
              <div className="project-images-web">
                <div className="image-slider-web" style={{ transform: `translateX(-${currentVault * 100}%)` }}>
                  {vaultImages.map((img, index) => (
                    <img key={index} src={img} alt={`Vault ${index + 1}`} className="project-image-web" />
                  ))}
                </div>
              </div>
              <div className="web-project-description">
                <h3>ArchiTech Vault</h3>
                <p>ArchiTech Vault (ATV) is a React.js and Supabase-based platform that organizes and shares academic outputs like theses and research. It promotes collaboration and supports the university's goal of innovation and knowledge-sharing. </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
