import React from 'react';
import NotificationList from './NotificationList';

function App() {
  const notifications = [
    { id: 1, message: 'You have a new message.' },
    { id: 2, message: 'Your order has been shipped.' },
    { id: 3, message: 'Update available for your app.' },
  ];

  return (
    <div>
      <h1>Notifications</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;
