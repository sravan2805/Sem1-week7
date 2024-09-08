// JobCard.js
import React from 'react';
import PropTypes from 'prop-types';

const JobCard = ({ jobTitle, companyName, location }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const jobTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const companyNameStyle = {
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
      <h3 style={jobTitleStyle}>{jobTitle}</h3>
      <p style={companyNameStyle}>Company: {companyName}</p>
      <p style={locationStyle}>Location: {location}</p>
    </div>
  );
};

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default JobCard;
