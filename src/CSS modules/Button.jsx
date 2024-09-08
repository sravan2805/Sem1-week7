// Button.js
import React from 'react';
import styles from './Button.module.css'; // Import the CSS module

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
