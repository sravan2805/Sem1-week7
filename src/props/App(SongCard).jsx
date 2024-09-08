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
        songTitle="Shape of You"
        artist="Ed Sheeran"
        album="÷ (Divide)"
      />
      <SongCard
        songTitle="Levitating"
        artist="Dua Lipa"
        album="Future Nostalgia"
      />
      <SongCard
        songTitle="Bad Guy"
        artist="Billie Eilish"
        album="When We All Fall Asleep, Where Do We Go?"
      />
    </div>
  );
};

export default App;
