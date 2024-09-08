import React from 'react';

function Notification({ message }) {
  return (
    <div style={notificationStyle}>
      <p>{message}</p>
    </div>
  );
}

const notificationStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
  backgroundColor: '#f9f9f9',
};

export default Notification;
