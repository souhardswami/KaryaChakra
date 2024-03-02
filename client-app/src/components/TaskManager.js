import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

import '../css/App.css';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("http://localhost:8000/tasks")
      .then((response) => response.json())
      .then(setTasks)
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  const handleCreateTask = (newTask) => {
    createTask(newTask);
  };

  const createTask = (newTask) => {
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => setTasks([...tasks, data]))
      .catch((error) => console.error("Error creating task:", error));
  };

  const handleUpdateTask = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    fetch(`http://localhost:8000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) =>
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === data.id ? { ...task, status: data.status } : task
          )
        )
      )
      .catch((error) => console.error("Error updating task:", error));
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const deleteTask = (taskId) => {
    fetch(`http://localhost:8000/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then(() => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)))
      .catch((error) => console.error("Error deleting task:", error));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default TaskManager;
