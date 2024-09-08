// App.js
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="App">
      <h2>Progress Bar Example</h2>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
