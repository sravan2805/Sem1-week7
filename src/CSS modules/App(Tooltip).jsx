// App.js
import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <h2>Tooltip Example</h2>
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}

export default App;
