import React from 'react';
import './Task.css'
import { formatDistanceToNow } from 'date-fns'

const TimeLeft = formatDistanceToNow(new Date(), {includeSeconds: true})

const Task = ({ label, important = false }) => {

  return (
        <div className="view">
          <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">{ label }</span>
              <span className="created">{ TimeLeft }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
  )
}


export default Task;