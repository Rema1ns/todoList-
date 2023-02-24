import React, { Component } from 'react';
import '../TaskFilter/TaskFilter.css';
import PropTypes from 'prop-types';

export default class TaskFilter extends Component {
  filterShowAll = this.props.filterShowAll;
  filterShowActive = this.props.filterShowActive;
  filterShowCompleted = this.props.filterShowCompleted;
  static defaultProps = {
    onFilterChange: () => {},
    filter: this.filterShowAll,
  };

  static propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
  };

  buttons = [
    { name: this.filterShowAll, label: this.filterShowAll },
    { name: this.filterShowActive, label: this.filterShowActive },
    { name: this.filterShowCompleted, label: this.filterShowCompleted },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;

      const clazz = isActive ? 'selected' : '';

      return (
        <button key={name} onClick={() => onFilterChange(name)} className={`${clazz}`}>
          {label}
        </button>
      );
    });
    return (
      <ul className="filters">
        <li>{buttons}</li>
      </ul>
    );
  }
}
