// SongCard.js
import React from 'react';
import PropTypes from 'prop-types';

const SongCard = ({ songTitle, artist, album }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const songTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const artistStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const albumStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={songTitleStyle}>{songTitle}</h3>
      <p style={artistStyle}>Artist: {artist}</p>
      <p style={albumStyle}>Album: {album}</p>
    </div>
  );
};

SongCard.propTypes = {
  songTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default SongCard;
