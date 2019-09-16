import React, { useState } from 'react'

function TaskForm({ setTasks, tasks, history }) {
  const [formValues, setFormValues] = useState({
    id: Date.now(),
    task: '',
    isCompleted: false
  })

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormValues({...formValues, id: Date.now()})
    setTasks([...tasks, formValues])
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