import React from 'react';
import thumbnail1 from '../assets/city.jpg';
import thumbnail2 from '../assets/flower.jpg';
import thumbnail3 from '../assets/Sunrise.jpg';

const VideoGallery = () => {
  return (
    <div style={styles.gallery}>
      <img src={thumbnail1} alt="Video 1" style={styles.thumbnail} />
      <img src={thumbnail2} alt="Video 2" style={styles.thumbnail} />
      <img src={thumbnail3} alt="Video 3" style={styles.thumbnail} />
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
  thumbnail: {
    width: '200px',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
};

export default VideoGallery;
