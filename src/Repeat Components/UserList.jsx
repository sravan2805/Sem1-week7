import React from 'react';
import User from './User';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </div>
  );
}

export default UserList;
