import React from 'react';
import Text from './Text';

const App = () => {
  return (
    <div>
      <Text
        content="This is a simple text."
        color="black"
        fontWeight="normal"
        lineHeight="1.5"
      />
      <Text
        content="This text is bold and red."
        color="red"
        fontWeight="bold"
        lineHeight="1.8"
      />
      <Text
        content="This text has a larger line height."
        color="blue"
        fontWeight="500"
        lineHeight="2.0"
      />
    </div>
  );
};

export default App;
