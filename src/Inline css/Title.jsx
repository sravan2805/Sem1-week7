// Title.js
import React from 'react';

const Title = ({ text, fontSize, color, margin }) => {
  const titleStyle = {
    fontSize: fontSize,
    color: color,
    margin: margin,
  };

  return <h1 style={titleStyle}>{text}</h1>;
};

export default Title;
