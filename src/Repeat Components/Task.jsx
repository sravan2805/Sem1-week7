import React from 'react';

function Task({ description, completed }) {
  return (
    <div style={taskStyle}>
      <input type="checkbox" checked={completed} readOnly />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {description}
      </span>
    </div>
  );
}

const taskStyle = {
  marginBottom: '10px',
};

export default Task;
