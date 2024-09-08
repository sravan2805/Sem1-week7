import React from 'react';

function Photo({ url, description }) {
  return (
    <div style={photoStyle}>
      <img src={url} alt={description} style={imageStyle} />
      <p>{description}</p>
    </div>
  );
}

const photoStyle = {
  marginBottom: '20px',
  textAlign: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
};

export default Photo;
