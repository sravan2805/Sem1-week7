// JobCard.js
import React from 'react';

const JobCard = ({ jobTitle, companyName, location }) => {
  const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '350px',
    textAlign: 'left',
  };

  const jobTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const companyNameStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '8px',
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h3 style={jobTitleStyle}>{jobTitle}</h3>
      <p style={companyNameStyle}>{companyName}</p>
      <p style={locationStyle}>Location: {location}</p>
    </div>
  );
};

export default JobCard;
