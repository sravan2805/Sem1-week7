// Label.js
import React from 'react';

const Label = ({ text, fontSize, color, display }) => {
  const labelStyle = {
    fontSize: fontSize,
    color: color,
    display: display,
  };

  return <label style={labelStyle}>{text}</label>;
};

export default Label;
