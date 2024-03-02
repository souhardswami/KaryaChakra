// TaskForm.js
import React, { useState } from 'react';
import "../css/TaskForm.css";

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!title.trim()) {
      alert('Task title cannot be empty');
      return;
    }

    // Create a new task object
    const newTask = {
      title,
      description,
      status: 'To Do',
    };

    // Call the parent component's function to handle task creation
    onCreateTask(newTask);

    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
