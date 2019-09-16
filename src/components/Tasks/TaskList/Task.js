import React from 'react';
import { Link } from 'react-router-dom';

function Task({ task, toggle }) {
  return (
    <>
    <li onClick={() => toggle(task.id)}>
      {task.completed ? <del>{`${task.task}`}</del> : `${task.task}`}
    </li>
    <button>
      <Link to={`/edittask/${task.id}`}>
         Edit
      </Link>
    </button>
    </>
  )
}

export default Task;