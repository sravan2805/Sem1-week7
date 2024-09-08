import React from 'react';
import Photo from './Photo';

function PhotoGallery({ photos }) {
  return (
    <div>
      {photos.map(photo => (
        <Photo key={photo.id} url={photo.url} description={photo.description} />
      ))}
    </div>
  );
}

export default PhotoGallery;
