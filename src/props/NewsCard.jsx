// NewsCard.js
import React from 'react';

const NewsCard = ({ headline, summary, source }) => {
  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '400px',
    textAlign: 'left',
  };

  const headlineStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const summaryStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '8px',
  };

  const sourceStyle = {
    fontSize: '14px',
    color: '#777',
    textAlign: 'right',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headlineStyle}>{headline}</h3>
      <p style={summaryStyle}>{summary}</p>
      <p style={sourceStyle}>Source: {source}</p>
    </div>
  );
};

export default NewsCard;
