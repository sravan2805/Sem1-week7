// Badge.js
import React from 'react';
import styles from './Badge.module.css'; // Import the CSS module

const Badge = ({ type, children }) => {
  let badgeClass = '';

  switch (type) {
    case 'success':
      badgeClass = styles.success;
      break;
    case 'warning':
      badgeClass = styles.warning;
      break;
    case 'error':
      badgeClass = styles.error;
      break;
    default:
      badgeClass = styles.default;
  }

  return <span className={`${styles.badge} ${badgeClass}`}>{children}</span>;
};

export default Badge;
