import React from 'react';

import '../TaskList/TaskList.css'
import Task from './Task/Task'

const TaskList = (props) => {
  const { todos } = props;
  let label = 'Edit task';
  const elements = todos.map((item) => {
    const {id, className, important, ...rest} = item;
    const style =  {
      display: important ? 'block' : 'none'
    }
    console.log(props)
    return (
        <li key={id} className={className}>
          <Task { ...rest } />
          <input type="text" className="edit" value={label} style={style}/>
        </li>
    )
  })


  return (
      <ul className='todo-list'>
        { elements }
      </ul>
  )
}


export default TaskList;