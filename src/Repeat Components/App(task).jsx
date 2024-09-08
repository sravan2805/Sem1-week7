import React from 'react';
import TaskList from './TaskList';

function App() {
  const tasks = [
    { id: 1, description: 'Complete React project', completed: false },
    { id: 2, description: 'Study for exams', completed: true },
    { id: 3, description: 'Buy groceries', completed: false },
  ];

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
