import React from 'react';
import './Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p className="footer-text">© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
