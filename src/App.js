import React, { useState } from 'react';
import TaskForm from './components/TaskForm'
import '../src/index.css'

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <TaskForm setTaks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;