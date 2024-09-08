import React from 'react';
import Song from './Song';

function Playlist({ songs }) {
  return (
    <div>
      {songs.map(song => (
        <Song key={song.id} title={song.title} artist={song.artist} />
      ))}
    </div>
  );
}

export default Playlist;
