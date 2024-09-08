import React from 'react';
import './NavigationMenu.css'; // Import the external CSS file

const NavigationMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;