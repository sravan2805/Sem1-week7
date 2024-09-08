// ProductCard.js
import React from 'react';

const ProductCard = ({ productName, price, description }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#4caf50',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{productName}</h3>
      <p style={priceStyle}>${price}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default ProductCard;
