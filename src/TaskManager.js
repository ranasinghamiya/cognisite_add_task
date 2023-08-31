import React, { useState } from 'react';

function TaskManager() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask('');
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;