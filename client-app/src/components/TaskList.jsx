import React from 'react';
import '../css/TaskList.css';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.length > 0 ?tasks.map((task) => (
        <li key={task.id} data-status={task.status}>
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
      )) : <h1> No Task 😀</h1>}
    </ul>
  );
};

export default TaskList;
