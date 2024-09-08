// CourseCard.js
import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ courseName, instructor, duration }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    maxWidth: '300px',
    textAlign: 'left',
  };

  const courseNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const instructorStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
  };

  const durationStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={cardStyle}>
      <h3 style={courseNameStyle}>{courseName}</h3>
      <p style={instructorStyle}>Instructor: {instructor}</p>
      <p style={durationStyle}>Duration: {duration} hours</p>
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CourseCard;
