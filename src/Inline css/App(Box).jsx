import React from 'react';
import Box from './Box';

const App = () => {
  return (
    <div>
      <Box width="100px" height="100px" backgroundColor="red" />
      <Box width="150px" height="150px" backgroundColor="blue" />
      <Box width="200px" height="200px" backgroundColor="green" />
    </div>
  );
};

export default App;
