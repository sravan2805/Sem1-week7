// Button.js
import React from 'react';

const Button = ({ text, backgroundColor, fontSize, margin, onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    margin: margin,
    padding: '10px 20px', // Add padding for better button appearance
    border: 'none',        // Remove default border
    borderRadius: '5px',   // Add rounded corners
    color: '#fff',         // Set text color to white
    cursor: 'pointer',     // Change cursor to pointer on hover
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
