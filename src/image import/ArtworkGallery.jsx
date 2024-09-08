import React from 'react';
import artwork1 from '../assets/Sunrise.jpg';
import artwork2 from '../assets/flower.jpg';
import artwork3 from '../assets/city.jpg';

const ArtworkGallery = () => {
  const artworks = [
    {
      img: artwork1,
      title: 'Sunrise Over the Mountains',
      description: 'A beautiful sunrise painting capturing the essence of nature’s calm.',
    },
    {
      img: artwork2,
      title: 'Abstract Patterns',
      description: 'An exploration of shapes and colors, representing the chaotic beauty of life.',
    },
    {
      img: artwork3,
      title: 'Cityscape at Night',
      description: 'A vibrant portrayal of a city illuminated by the lights of the night.',
    },
  ];

  return (
    <div style={styles.gallery}>
      {artworks.map((artwork, index) => (
        <div key={index} style={styles.artwork}>
          <img src={artwork.img} alt={artwork.title} style={styles.image} />
          <h3 style={styles.title}>{artwork.title}</h3>
          <p style={styles.description}>{artwork.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  artwork: {
    textAlign: 'center',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: '10px 0 5px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
};

export default ArtworkGallery;
