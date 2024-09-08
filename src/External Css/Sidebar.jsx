// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Import the external CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item"><a href="#home">Home</a></li>
          <li className="sidebar-item"><a href="#services">Services</a></li>
          <li className="sidebar-item"><a href="#about">About</a></li>
          <li className="sidebar-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
