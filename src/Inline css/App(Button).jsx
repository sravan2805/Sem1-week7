import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button
        text="Primary Button"
        backgroundColor="blue"
        fontSize="16px"
        margin="10px"
        onClick={handleClick}
      />
      <Button
        text="Secondary Button"
        backgroundColor="green"
        fontSize="14px"
        margin="10px"
        onClick={handleClick}
      />
      <Button
        text="Danger Button"
        backgroundColor="red"
        fontSize="18px"
        margin="10px"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
