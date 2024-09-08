// App.js
import React from 'react';
import Badge from './Badge';

function App() {
  return (
    <div className="App">
      <h2>Badge Component Example</h2>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="error">Error</Badge>
    </div>
  );
}

export default App;
