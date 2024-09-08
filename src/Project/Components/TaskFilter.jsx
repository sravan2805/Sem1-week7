import React from 'react';

const TaskFilter = ({ filter, onChange }) => {
  const style = {
    padding: '10px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  };

  return (
    <div style={style}>
      <input
        type="text"
        value={filter}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter tasks"
      />
    </div>
  );
};

export default TaskFilter;
