import React, {Component} from 'react';
import '../Footer/Footer.css'

import TaskFilter from '../TaskFilter/TaskFilter'

export default class Footer extends Component {

  render() {
    const {todoCount, filter, onFilterChange, delCompleteItems} = this.props
    return (
        <footer className="footer">
          <span className="todo-count">{todoCount}</span>
          <TaskFilter
              onFilterChange={onFilterChange}
              filter={ filter }/>
          <button
              onClick={delCompleteItems}
              className="clear-completed">
            Clear completed</button>
        </footer>
    )
  }


}