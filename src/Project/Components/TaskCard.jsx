import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TaskCard.module.css';
import taskIcon from '../icons/flower.jpg';

const TaskCard = ({ task }) => {
  return (
    <div className={styles.taskCard}>
      <img src={taskIcon} alt="Task Icon" className={styles.icon} />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
