// TaskList.js
import React from 'react';
import '../css/TaskList.css';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
          <div>
            <button onClick={() => onUpdateTask(task.id, 'In Progress')} className="start" >Start</button>
            <button onClick={() => onUpdateTask(task.id, 'Done')} className="complete">Complete</button>
            <button onClick={() => onDeleteTask(task.id)} className="delete">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
