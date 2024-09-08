// App.js
import React from 'react';
import SongCard from './SongCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <SongCard
        songTitle="Blinding Lights"
        artist="The Weeknd"
        album="After Hours"
      />
      <SongCard
        songTitle="Levitating"
        artist="Dua Lipa"
        album="Future Nostalgia"
      />
      <SongCard
        songTitle="Shape of You"
        artist="Ed Sheeran"
        album="÷ (Divide)"
      />
    </div>
  );
};

export default App;
