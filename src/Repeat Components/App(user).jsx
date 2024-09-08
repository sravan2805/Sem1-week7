import React from 'react';
import UserList from './UserList';

function App() {
  const users = [
    { id: 1, name: 'Sravan' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Alice' }
  ];

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
