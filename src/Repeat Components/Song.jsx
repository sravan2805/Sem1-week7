import React from 'react';

function Song({ title, artist }) {
  return (
    <div style={songStyle}>
      <h4>{title}</h4>
      <p>Artist: {artist}</p>
    </div>
  );
}

const songStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
};

export default Song;
