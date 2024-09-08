import React from 'react';
import MessageList from './MessageList';

function App() {
  const messages = [
    { id: 1, text: 'Hello, world!' },
    { id: 2, text: 'React is awesome!' },
    { id: 3, text: 'Let’s build something amazing.' },
  ];

  return (
    <div>
      <h1>Message List</h1>
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
