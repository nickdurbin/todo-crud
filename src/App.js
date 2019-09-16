import React, { useState, useEffect } from 'react';
import TaskForm from './components/Tasks/TaskForm/TaskForm';
import TaskList from './components/Tasks/TaskList/TaskList';
import '../src/index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem('tasks')) {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
      }
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks').length !== tasks.length)) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks.length])

  return (
    <div className="App">
      <TaskForm setTask={setTasks} tasks={tasks} />
      <TaskList />
    </div>
  );
}

export default App;