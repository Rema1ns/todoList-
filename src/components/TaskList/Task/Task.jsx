import React, { Component } from 'react';
import './Task.css'
import { formatDistanceToNow } from 'date-fns'

const TimeLeft = formatDistanceToNow(new Date(), {includeSeconds: true})

export default class Task extends Component {
  state = {
    important: false,
    done: false
  }
  onMark = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    })
  }

  onDeleted = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  }

  render() {
    const { label, delItem } = this.props
    const { done, important } = this.state

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
              onClick={ this.onMark }></input>
          <label>
            <span
                className={ toggles }
                onClick={ this.onDeleted }>{label}</span>
            <span className="created">{TimeLeft}</span>
          </label>

          <button className="icon icon-edit"></button>
          <button
              className="icon icon-destroy"
              onClick={ delItem } >
          </button>
        </div>
    )
  }
}
