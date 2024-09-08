// App.js
import React from 'react';
import Notification from './Notification';

function App() {
  return (
    <div className="App">
      <Notification type="success" message="Operation completed successfully!" />
      <Notification type="error" message="There was an error processing your request." />
      <Notification type="warning" message="Warning: Please check your input values." />
    </div>
  );
}

export default App;
