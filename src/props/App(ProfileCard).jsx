// App.js
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ProfileCard
        username="JohnDoe"
        bio="Web developer with a passion for creating beautiful and functional user experiences."
        profilePicture="https://i.pinimg.com/originals/11/4a/9c/114a9cb227d0ff4abcb53150c6436100.jpg"
      />
      <ProfileCard
        username="JaneSmith"
        bio="Graphic designer who loves to create stunning visuals and engaging content."
        profilePicture="https://img.freepik.com/premium-photo/butterfly-flower-front-sunset_853677-807.jpg"
      />
      <ProfileCard
        username="AlexJohnson"
        bio="Software engineer specializing in backend development and cloud computing."
        profilePicture="https://i.pinimg.com/originals/d8/46/c1/d846c1529db2b3a352585d9311826930.jpg"
      />
      <ProfileCard
        username="EmilyBrown"
        bio="Digital marketer with expertise in social media strategy and content creation."
        profilePicture="https://i.pinimg.com/736x/4f/88/d1/4f88d16b206aae011593109adde69f23.jpg"
      />
    </div>
  );
};

export default App;
