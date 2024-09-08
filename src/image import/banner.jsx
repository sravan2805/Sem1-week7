import React, { useState, useEffect } from 'react';
import image1 from '../assets/city.jpg';
import image2 from '../assets/flower.jpg';
import image3 from '../assets/Sunrise.jpg';

const Banner = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div style={styles.banner}>
      <img 
        src={images[currentImageIndex]} 
        alt={`Banner ${currentImageIndex + 1}`} 
        style={styles.bannerImage} 
      />
    </div>
  );
};

const styles = {
  banner: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '1300px',
    height: '600px',
    display: 'block',
    objectFit: 'cover',
  },
};

export default Banner;
