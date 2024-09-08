import React, { useState } from 'react';
import styles from '../styles/AddTaskForm.module.css';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAdd({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className={styles.addTaskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>Add Task</button>
    </form>
  );
};

export default AddTaskForm;
