// BookCard.js
import React from 'react';

const BookCard1 = ({ title, author, yearPublished }) => {
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

  const authorStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  };

  const yearStyle = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={authorStyle}>by {author}</p>
      <p style={yearStyle}>Published: {yearPublished}</p>
    </div>
  );
};

export default BookCard1;
