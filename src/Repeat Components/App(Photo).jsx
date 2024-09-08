import React from 'react';
import PhotoGallery from './PhotoGallery';

function App() {
  const photos = [
    { id: 1, url: 'https://th.bing.com/th/id/OIP.dC2OtOv7qDhaMnxyPPg9gQHaE8?rs=1&pid=ImgDetMain', description: 'Beautiful sunrise' },
    { id: 2, url: 'https://wallup.net/wp-content/uploads/2017/11/17/233110-New_York_City-USA-city-cityscape-reflection-skyscraper-skyline.jpg', description: 'City skyline' },
    { id: 3, url: 'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg', description: 'Mountain landscape' },
  ];

  return (
    <div>
      <h1>Photo Gallery</h1>
      <PhotoGallery photos={photos} />
    </div>
  );
}

export default App;
