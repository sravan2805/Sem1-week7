import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card
        backgroundColor="white"
        padding="20px"
        borderRadius="10px"
      >
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>

      <Card
        backgroundColor="#f8f9fa"
        padding="15px"
        borderRadius="5px"
      >
        <h2>Another Card</h2>
        <p>Here is some more content inside a different card.</p>
      </Card>

      <Card
        backgroundColor="#e9ecef"
        padding="25px"
        borderRadius="15px"
      >
        <h2>Yet Another Card</h2>
        <p>This card has different styles applied to it.</p>
      </Card>
    </div>
  );
};

export default App;
