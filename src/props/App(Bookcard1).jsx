// App.js
import React from 'react';
import BookCard from './BookCard1';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <BookCard
        title="To Kill a Mockingbird"
        author="Harper Lee"
        yearPublished="1960"
      />
      <BookCard
        title="1984"
        author="George Orwell"
        yearPublished="1949"
      />
      <BookCard
        title="The Great Gatsby"
        author="F. Scott Fitzgerald"
        yearPublished="1925"
      />
      <BookCard
        title="Moby Dick"
        author="Herman Melville"
        yearPublished="1851"
      />
    </div>
  );
};

export default App;
