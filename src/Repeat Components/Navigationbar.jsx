import React from 'react';

function Header() {
  return (
    <nav>
      <ul style={navStyle}>
        <li style={linkStyle}><a href="#home">Home</a></li>
        <li style={linkStyle}><a href="#about">About</a></li>
        <li style={linkStyle}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyle: 'none',
  padding: '10px',
  backgroundColor: 'black',
};

const linkStyle = {
  margin: '0 10px',
  color: 'white',
  textDecoration: 'none',
};

export default Header;
