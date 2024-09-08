import React from 'react';
import Container from './Container';

const App = () => {
  return (
    <Container padding="20px" border="1px solid #ccc" maxWidth="800px">
      <h1>Welcome to My Website</h1>
      <p>This is some content inside a container with padding, a border, and a max-width.</p>
    </Container>
  );
};

export default App;
