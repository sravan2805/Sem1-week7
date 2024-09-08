// ProductCard.js
import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ productName, price, description }) => {
  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const productNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={productNameStyle}>{productName}</h3>
      <p style={priceStyle}>${price}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
