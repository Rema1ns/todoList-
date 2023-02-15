import React, { Component } from 'react';
import PropTypes from "prop-types";

import '../TaskList/TaskList.css'
import Task from './Task/Task'


export default class TaskList extends Component {

  static defaultProps = {
    delItem: (() => {}),
    onToggleImportant: (() => {}),
    OnToggleDone: (() => {}),
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    delItem: PropTypes.func,
    onToggleImportant: PropTypes.func,
    OnToggleDone: PropTypes.func,
  }


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