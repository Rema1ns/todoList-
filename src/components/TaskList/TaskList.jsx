import React from 'react';

import '../TaskList/TaskList.css'
import Task from './Task/Task'

const TaskList = ({ todos, delItem }) => {

  let label = 'Edit task';
  const elements = todos.map((item) => {
    const {id, className, important, ...rest} = item;
    const style =  {
      display: important ? 'block' : 'none'
    }
    return (
        <li key={id} className={className}>
          <Task
              {...rest}
              delItem={ () => delItem(id) } />
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