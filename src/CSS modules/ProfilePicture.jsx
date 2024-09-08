// ProfilePicture.js
import React from 'react';
import styles from './ProfilePicture.module.css'; // Import the CSS module

const ProfilePicture = ({ src, alt }) => {
  return (
    <div className={styles.profileContainer}>
      <img src={src} alt={alt} className={styles.profileImage} />
    </div>
  );
};

export default ProfilePicture;
