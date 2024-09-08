// ProfileCard.js
import React from 'react';

const ProfileCard = ({ username, bio, profilePicture }) => {
  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  const usernameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const bioStyle = {
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img src={profilePicture} alt={`${username}'s profile`} style={imgStyle} />
      <h3 style={usernameStyle}>{username}</h3>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
};

export default ProfileCard;
