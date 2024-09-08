// Section.js
import React from 'react';

const Section = ({ children, margin, padding, border }) => {
  const sectionStyle = {
    margin: margin,
    padding: padding,
    border: border,
  };

  return <section style={sectionStyle}>{children}</section>;
};

export default Section;
