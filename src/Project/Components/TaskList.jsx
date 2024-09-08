import React from 'react';
import TaskCard from './TaskCard';
import styles from '../styles/TaskCard.module.css';

const TaskList = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
