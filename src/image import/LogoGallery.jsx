import React from 'react';
import logo1 from '../assets/city.jpg';
import logo2 from '../assets/flower.jpg';
import logo3 from '../assets/Sunrise.jpg';

const LogoGallery = () => {
  return (
    <div style={styles.gallery}>
      <img src={logo1} alt="Logo 1" style={styles.logo} />
      <img src={logo2} alt="Logo 2" style={styles.logo} />
      <img src={logo3} alt="Logo 3" style={styles.logo} />
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '20px',
  },
  logo: {
    width: '150px',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
};

export default LogoGallery;
