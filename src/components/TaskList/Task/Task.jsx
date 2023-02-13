import React, { Component } from 'react';
import './Task.css'
import { formatDistanceToNow } from 'date-fns'

const TimeLeft = formatDistanceToNow(new Date(), {includeSeconds: true})

export default class Task extends Component {


  render() {
    const { label, delItem, onToggleImportant, onToggleDone, important, done } = this.props

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
            <span className="created">{TimeLeft}</span>
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
