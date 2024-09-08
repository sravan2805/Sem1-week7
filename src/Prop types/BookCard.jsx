// BookCard.js
import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ title, author, yearPublished }) => {
  const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const authorStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const yearPublishedStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={authorStyle}>Author: {author}</p>
      <p style={yearPublishedStyle}>Published: {yearPublished}</p>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  yearPublished: PropTypes.number.isRequired,
};

export default BookCard;
