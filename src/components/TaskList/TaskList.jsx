import React, { Component } from 'react';

import '../TaskList/TaskList.css'
import Task from './Task/Task'


export default class TaskList extends Component {


  render() {
    const { todos, delItem, onToggleDone, onToggleImportant } = this.props

    let label = 'Edit task';

    const elements = todos.map((item) => {
      const {id, className, ...rest} = item;

      let classN = ''
      if (item.done) {
        classN += " completed"
      }
      return (
          <li key={id} className={ classN }>
            <Task
                {...rest}
                delItem={ () => delItem(id) }
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}/>
            <input type="text" className="edit" value={label} />
          </li>
      )
    })


    return (
        <ul className='todo-list'>
          { elements }
        </ul>
    )
  }


}