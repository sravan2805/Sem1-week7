// Footer.js
import React from 'react';

const Footer = ({ content, backgroundColor, padding, fontSize }) => {
  const footerStyle = {
    backgroundColor: backgroundColor,
    padding: padding,
    fontSize: fontSize,
    textAlign: 'center', // Center the content horizontally
    color: '#fff',        // Set text color to white for better contrast
  };

  return <footer style={footerStyle}>{content}</footer>;
};

export default Footer;
