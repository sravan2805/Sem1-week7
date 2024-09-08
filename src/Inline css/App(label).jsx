import React from 'react';
import Label from './Label';

const App = () => {
  return (
    <div>
      <Label
        text="Name:"
        fontSize="16px"
        color="black"
        display="block"
      />
      <input type="text" placeholder="Enter your name" />

      <Label
        text="Email:"
        fontSize="14px"
        color="blue"
        display="inline-block"
      />
      <input type="email" placeholder="Enter your email" />

      <Label
        text="Password:"
        fontSize="18px"
        color="red"
        display="block"
      />
      <input type="password" placeholder="Enter your password" />
    </div>
  );
};

export default App;
