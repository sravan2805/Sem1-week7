import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import AddTaskForm from './Components/AddTaskForm';
import TaskFilter from './Components/TaskFilter';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskFilter filter={filter} onChange={setFilter} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
