import React from 'react';

export function Sidebar() {
  return (
    <aside style={sidebarStyle}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </aside>
  );
}

const sidebarStyle = {
  width: '200px',
  padding: '15px',
  backgroundColor: '#f4f4f4',
  position: 'fixed',
  height: '100%',
};
