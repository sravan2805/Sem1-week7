// Card.js
import React from 'react';

const Card = ({ children, backgroundColor, padding, borderRadius }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    padding: padding,
    borderRadius: borderRadius,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow for a card-like appearance
    margin: '10px', // Optional: adds some space around the card
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
