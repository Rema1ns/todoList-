import React, { Component } from 'react';
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from "prop-types";


export default class Task extends Component {

  static defaultProps = {
    label: 'new Task',
    delItem: (() => {}),
    onToggleImportant: (() => {}),
    OnToggleDone: (() => {}),
    important: false,
    done: false,
    tm: new Date()
  }

  static propTypes = {
    label: PropTypes.string,
    delItem: PropTypes.func,
    onToggleImportant: PropTypes.func,
    OnToggleDone: PropTypes.func,
    important: PropTypes.bool,
    done: PropTypes.bool,
    tm: PropTypes.string
  }

  render() {
    const { label, delItem, onToggleImportant, onToggleDone, important, done, tm} = this.props
    const TimeLeft = formatDistanceToNow(new Date(tm), {includeSeconds: true})

    let toggles = ""
    if (important) {
      toggles += ' important'
    }
    if (done) {
      toggles += ' done'
    }

    return (
        <div className="view">
          <input
              className="toggle"
              type="checkbox"
              onClick={ onToggleImportant }></input>
          <label>
            <span
                className={ toggles }
                onClick={ onToggleDone }>{label}</span>
            <span className="created">{ TimeLeft }</span>
          </label>

          <button
              className="icon icon-edit"
              ></button>
          <button
              className="icon icon-destroy"
              onClick={ delItem } >
          </button>
        </div>
    )
  }
}
