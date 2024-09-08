import React from 'react';
import Notification from './Notification';

function NotificationList({ notifications }) {
  return (
    <div>
      {notifications.map(notification => (
        <Notification key={notification.id} message={notification.message} />
      ))}
    </div>
  );
}

export default NotificationList;
