// Header.js
import React from 'react';

const Header = ({ title, backgroundColor, padding, textAlign }) => {
  const headerStyle = {
    backgroundColor: backgroundColor,
    padding: padding,
    textAlign: textAlign,
  };

  return <header style={headerStyle}>{title}</header>;
};

export default Header;
