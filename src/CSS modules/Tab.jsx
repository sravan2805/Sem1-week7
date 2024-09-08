// Tab.js
import React, { useState } from 'react';
import styles from './Tab.module.css'; // Import the CSS module

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0); // Keep track of the active tab index

  const handleTabClick = (index) => {
    setActiveTab(index); // Set the clicked tab as active
  };

  return (
    <div className={styles.tabsContainer}>
      {/* Tab buttons */}
      <div className={styles.tabList}>
        <button
          className={`${styles.tabButton} ${activeTab === 0 ? styles.active : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 1 ? styles.active : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 2 ? styles.active : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </button>
      </div>

      {/* Content based on the active tab */}
      <div className={styles.tabContent}>
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Tab;
