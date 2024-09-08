import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header
        title="Welcome to My Website"
        backgroundColor="navy"
        padding="20px"
        textAlign="center"
      />
      <Header
        title="About Us"
        backgroundColor="darkgreen"
        padding="15px"
        textAlign="left"
      />
      <Header
        title="Contact"
        backgroundColor="maroon"
        padding="25px"
        textAlign="right"
      />
    </div>
  );
};

export default App;
