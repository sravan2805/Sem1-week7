// ToggleSwitch.js
import React, { useState } from 'react';
import styles from './ToggleSwitch.module.css'; // Import the CSS module

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.switch} onClick={handleToggle}>
      <div className={`${styles.slider} ${isOn ? styles.on : styles.off}`}></div>
    </div>
  );
};

export default ToggleSwitch;
