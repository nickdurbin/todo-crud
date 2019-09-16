import React from 'react';
import Task from './Task';

function TaskList() {
  const tempArr = [1,2,3]
  return (
    <div>
      {tempArr.map(number => <Task key={number} number={number} />)}
    </div>
  )
}

export default TaskList;