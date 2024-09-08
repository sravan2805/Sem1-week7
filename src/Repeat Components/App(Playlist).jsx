import React from 'react';
import Playlist from './Playlist';

function App() {
  const songs = [
    { id: 1, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 3, title: 'Levitating', artist: 'Dua Lipa' },
  ];

  return (
    <div>
      <h1>My Playlist</h1>
      <Playlist songs={songs} />
    </div>
  );
}

export default App;
