import React, { useState } from 'react';

const TaskFilter = ({ tasks, setFilteredTasks }) => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (status) => {
    setFilter(status);
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.status === status);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('All')}>All</button>
      <button onClick={() => handleFilterChange('Pending')}>Pending</button>
      <button onClick={() => handleFilterChange('Completed')}>Completed</button>
    </div>
  );
};

export default TaskFilter;
