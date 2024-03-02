// TaskFilter.js
import React from 'react';
import "../css/TaskFilter.css";

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div>
      <label>
        Filter by Status:
        <select onChange={(e) => onFilterChange(e.target.value)}>
          {["All", "To Do", "In Progress", "Done"].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;
