// Text.js
import React from 'react';

const Text = ({ content, color, fontWeight, lineHeight }) => {
  const textStyle = {
    color: color,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
  };

  return <p style={textStyle}>{content}</p>;
};

export default Text;
