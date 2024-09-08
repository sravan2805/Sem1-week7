// CourseCard.js
import React from 'react';

const CourseCard = ({ courseName, instructor, duration }) => {
  const cardStyle = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'center',
  };

  const courseNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const instructorStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '8px',
  };

  const durationStyle = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={cardStyle}>
      <h3 style={courseNameStyle}>{courseName}</h3>
      <p style={instructorStyle}>Instructor: {instructor}</p>
      <p style={durationStyle}>Duration: {duration}</p>
    </div>
  );
};

export default CourseCard;
