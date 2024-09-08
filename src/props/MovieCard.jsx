// MovieCard.js
import React from 'react';

const MovieCard = ({ title, director, releaseYear }) => {
  const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const directorStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
  };

  const yearStyle = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={directorStyle}>Directed by: {director}</p>
      <p style={yearStyle}>Released in: {releaseYear}</p>
    </div>
  );
};

export default MovieCard;
