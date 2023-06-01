import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleTaskSubmit}>
        <input type="text" value={newTask} onChange={handleTaskChange} placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>
      <div>
        <h2>Your Tasks</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
