import React, { useState } from 'react';
import image1 from '../assets/city.jpg';
import image2 from '../assets/flower.jpg';
import image3 from '../assets/Sunrise.jpg';

const ImageSlider = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={styles.slider}>
      <button onClick={goToPrevious} style={styles.button}>Previous</button>
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        style={styles.image} 
      />
      <button onClick={goToNext} style={styles.button}>Next</button>
    </div>
  );
};

const styles = {
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  image: {
    width: '500px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ImageSlider;
