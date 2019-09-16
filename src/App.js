import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  function toggleComplete(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return ({...task, completed: !task.completed})
      } else {
        return task;
      }
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/addtask' render={props => <TaskForm {...props} setTasks={setTasks} tasks={tasks} />} />
        <Route exact path='/' render={props => <TaskList {...props} tasks={tasks} toggle={toggleComplete} />} />
      </Switch>
    </div>
  );
}

export default App;