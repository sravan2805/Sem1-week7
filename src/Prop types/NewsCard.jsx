// NewsCard.js
import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ headline, summary, source }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const headlineStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const summaryStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const sourceStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headlineStyle}>{headline}</h3>
      <p style={summaryStyle}>{summary}</p>
      <p style={sourceStyle}>Source: {source}</p>
    </div>
  );
};

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default NewsCard;
