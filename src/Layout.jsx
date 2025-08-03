// Layout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-bar">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Me</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
          <NavLink to="/certificates" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Certificates</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
