import React, { Component } from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import Timer from './timer/timer';

export default class Task extends Component {
  static defaultProps = {
    label: 'new Task',
    delItem: () => {},
    OnToggleDone: () => {},
    done: false,
    tm: new Date(),
  };

  static propTypes = {
    label: PropTypes.string,
    delItem: PropTypes.func,
    OnToggleDone: PropTypes.func,
    done: PropTypes.bool,
    tm: PropTypes.string,
  };

  render() {
    const { label, delItem, onToggleDone, done, tm, onToggleEdit, edit, ...rest } = this.props;
    const TimeLeft = formatDistanceToNow(tm, { includeSeconds: true });

    const style = {
      display: edit ? 'none' : 'block',
    };

    let toggles = '';
    if (done) {
      toggles += ' done';
    }

    return (
      <div className="view" style={style}>
        <input className="toggle" type="checkbox" onClick={onToggleDone} checked={done}></input>
        <label>
          <span className={toggles}>{label}</span>
          <Timer {...rest} />
          <span className="created">{TimeLeft}</span>
        </label>

        <button onClick={onToggleEdit} className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={delItem}></button>
      </div>
    );
  }
}
