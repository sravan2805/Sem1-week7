// EventCard.js
import React from 'react';

const EventCard = ({ eventName, date, location }) => {
  const cardStyle = {
    backgroundColor: '#f9f9f9',
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

  const dateStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{eventName}</h3>
      <p style={dateStyle}>{date}</p>
      <p style={locationStyle}>{location}</p>
    </div>
  );
};

export default EventCard;
