// Tooltip.js
import React, { useState } from 'react';
import styles from './Tooltip.module.css'; // Import the CSS module

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className={styles.tooltip}>
          {text}
          <div className={styles.tooltipArrow}></div> {/* Arrow */}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
