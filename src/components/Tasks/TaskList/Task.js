import React from 'react';

function Task({ task, toggle }) {
  return (
    <li onClick={() => toggle(task.id)}>
      {task.completed ? <del>{`${task.task}`}</del> : `${task.task}`}
    </li>
  )
}

export default Task;