// MovieCard.js
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, director, releaseYear }) => {
  const cardStyle = {
    backgroundColor: '#f0f0f0',
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

  const directorStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const releaseYearStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={directorStyle}>Director: {director}</p>
      <p style={releaseYearStyle}>Release Year: {releaseYear}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default MovieCard;
