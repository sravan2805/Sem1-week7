import React from 'react';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import Header from './Navigationbar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', width: '100%' }}>
        <Header />
        <h1> __The Main content goes here__</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
