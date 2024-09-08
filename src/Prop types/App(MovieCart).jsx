// App.js
import React from 'react';
import MovieCard from './MovieCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <MovieCard
        title="Inception"
        director="Christopher Nolan"
        releaseYear={2010}
      />
      <MovieCard
        title="The Matrix"
        director="The Wachowskis"
        releaseYear={1999}
      />
      <MovieCard
        title="The Godfather"
        director="Francis Ford Coppola"
        releaseYear={1972}
      />
    </div>
  );
};

export default App;
