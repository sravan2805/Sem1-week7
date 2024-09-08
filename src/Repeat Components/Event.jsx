import React from 'react';

function Event({ name, date }) {
  return (
    <div style={eventStyle}>
      <h4>{name}</h4>
      <p>Date: {date}</p>
    </div>
  );
}

const eventStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default Event;
