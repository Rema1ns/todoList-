import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../TaskList/TaskList.css';
import Task from './Task/Task';

export default class TaskList extends Component {
  static defaultProps = {
    delItem: () => {},
    onToggleImportant: () => {},
    OnToggleDone: () => {},
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    delItem: PropTypes.func,
    onToggleImportant: PropTypes.func,
    OnToggleDone: PropTypes.func,
  };

  render() {
    const { todos, delItem, onToggleDone, onToggleImportant, onToggleEdit } = this.props;

    const elements = todos.map((item) => {
      const { id, edit, ...rest } = item;

      const style = {
        display: edit ? 'block' : 'none',
      };

      function onSubmit(e) {
        e.preventDefault();
        onToggleEdit(id);
        console.log(e.target.value);
      }
      function onLabelChange(e) {
        console.log(e.target.value);
      }

      let classN = '';
      if (item.done) {
        classN += ' completed';
      }

      return (
        <li key={id} className={classN}>
          <Task
            onToggleEdit={() => onToggleEdit(id)}
            edit={edit}
            {...rest}
            delItem={() => delItem(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
          />
          <form onSubmit={onSubmit}>
            <input onChange={onLabelChange} type="text" className="edit" style={style} placeholder="edit task..." />
          </form>
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
