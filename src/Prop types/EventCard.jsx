// EventCard.js
import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ eventName, date, location }) => {
  const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const eventNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const dateStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={eventNameStyle}>{eventName}</h3>
      <p style={dateStyle}>{date}</p>
      <p style={locationStyle}>{location}</p>
    </div>
  );
};

EventCard.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default EventCard;
