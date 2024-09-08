// Box.js
import React from 'react';

const Box = ({ width, height, backgroundColor }) => {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };

  return <div style={boxStyle}></div>;
};

export default Box;
