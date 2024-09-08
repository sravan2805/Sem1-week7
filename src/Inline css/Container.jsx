// Container.js
import React from 'react';

const Container = ({ children, padding, border, maxWidth }) => {
  const containerStyle = {
    padding: padding,
    border: border,
    maxWidth: maxWidth,
    margin: '0 auto', // Center the container horizontally
  };

  return <div style={containerStyle}>{children}</div>;
};

export default Container;
