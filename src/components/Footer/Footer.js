import React, { Component } from 'react';
import '../Footer/Footer.css';
import PropTypes from 'prop-types';

import TaskFilter from '../TaskFilter/TaskFilter';

export default class Footer extends Component {
  static defaultProps = {
    filter: 'all',
    todoCount: '0',
    onFilterChange: () => {},
    delCompleteItems: () => {},
  };

  static propTypes = {
    todoCount: PropTypes.number,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
    delCompleteItems: PropTypes.func,
  };

  render() {
    const { todoCount, filter, onFilterChange, delCompleteItems } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount}</span>
        <TaskFilter onFilterChange={onFilterChange} filter={filter} />
        <button onClick={delCompleteItems} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
