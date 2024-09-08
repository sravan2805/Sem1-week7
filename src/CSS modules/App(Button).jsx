// App.js
import React from 'react';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <h2>Custom Button</h2>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}

export default App;
