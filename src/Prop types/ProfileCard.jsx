// ProfileCard.js
import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ username, bio, profilePicture }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const profilePictureStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const usernameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const bioStyle = {
    fontSize: '16px',
    color: '#333',
  };

  return (
    <div style={cardStyle}>
      <img
        src={profilePicture}
        alt={`${username}'s profile`}
        style={profilePictureStyle}
      />
      <h3 style={usernameStyle}>{username}</h3>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default ProfileCard;
