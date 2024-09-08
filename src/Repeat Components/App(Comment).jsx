import React from 'react';
import CommentList from './CommentList';

function App() {
  const comments = [
    { id: 1, author: 'Alice', content: 'This is a great article!' },
    { id: 2, author: 'Bob', content: 'Thanks for sharing your thoughts.' },
    { id: 3, author: 'Charlie', content: 'I found this very helpful.' },
  ];

  return (
    <div>
      <h1>Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
