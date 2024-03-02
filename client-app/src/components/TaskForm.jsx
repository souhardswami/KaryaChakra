import React, { useState } from 'react';
import "../css/TaskForm.css";

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Task title cannot be empty');
      return;
    }
    const newTask = {
      title,
      description,
      status: 'To Do',
    };

    onCreateTask(newTask);

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
