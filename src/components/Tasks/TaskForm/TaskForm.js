import React, { useState, useEffect } from 'react'

function TaskForm({ setTasks, tasks, history, edit, match: { params: { id } } }) {
  const [formValues, setFormValues] = useState({
    id: Date.now(),
    task: '',
    isCompleted: false
  })

  useEffect(() => {
    if (edit) {
      const editTask = tasks.filter(task => task.id.toString() === id)[0]
      setFormValues(editTask);
    }
  }, [])

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  function updateTask(taskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return formValues;
      } else {
        return task;
      }  
    })
    setTasks(updatedTasks);
  }

  function addTask() {
    setFormValues({...formValues, id: Date.now()})
    setTasks([...tasks, formValues])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    edit ? updateTask(formValues.id) : addTask();
    history.push('/')
  }

  const handleCancel = () => {
    history.push('/')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Task Manager</h1>
        <input name="task" value={formValues.task} onChange={handleChange} placeholder='Add Task...'></input>
        <button type='submit'>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default TaskForm;