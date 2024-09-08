import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} description={task.description} completed={task.completed} />
      ))}
    </div>
  );
}

export default TaskList;
