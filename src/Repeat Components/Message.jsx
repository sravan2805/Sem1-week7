import React from 'react';

function Message({ text }) {
  return (
    <div style={messageStyle}>
      <p>{text}</p>
    </div>
  );
}

const messageStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default Message;
