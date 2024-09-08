import React from 'react';

export function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 MyWebsite. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
};
