import React, { useState } from 'react'

function TaskForm() {
  const [form, setForm] = useState({
    id: Date.now(),
    task: '',
    isCompleted: false
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="task" value={form.task} onChange={handleChange}></input>
      </form>
    </div>
  )
}

export default TaskForm;