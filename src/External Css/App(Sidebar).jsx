// App.js
import React from 'react';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* Main content would go here */}
      <div className="main-content" style={{ marginLeft: '260px', padding: '20px' }}>
        <h1>Welcome to the dashboard!</h1>
      </div>
    </div>
  );
}

export default App;
