// Breadcrumb.js
import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          {item}
          {index < items.length - 1 && (
            <span className={styles.separator}>/</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
