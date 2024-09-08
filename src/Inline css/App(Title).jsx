import React from 'react';
import Title from './Title';

const App = () => {
  return (
    <div>
      <Title text="Welcome to My Website" fontSize="32px" color="darkblue" margin="20px 0" />
      <Title text="About Us" fontSize="24px" color="green" margin="15px 0" />
      <Title text="Contact" fontSize="28px" color="red" margin="25px 0" />
    </div>
  );
};

export default App;
