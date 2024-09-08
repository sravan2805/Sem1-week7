// App.js
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProfileCard
        username="JaneDoe"
        bio="Software developer and tech enthusiast. Passionate about coding and learning new technologies."
        profilePicture="https://i.pinimg.com/originals/d8/46/c1/d846c1529db2b3a352585d9311826930.jpg"
      />
      <ProfileCard
        username="JohnSmith"
        bio="Designer and creative thinker. Enjoys working on UX/UI and exploring innovative design solutions."
        profilePicture="https://img.freepik.com/premium-photo/butterfly-flower-front-sunset_853677-807.jpg"
      />
      <ProfileCard
        username="AliceJohnson"
        bio="Data scientist with a love for statistics and machine learning. Always looking for new challenges."
        profilePicture="https://i.pinimg.com/originals/11/4a/9c/114a9cb227d0ff4abcb53150c6436100.jpg"
      />
    </div>
  );
};

export default App;
