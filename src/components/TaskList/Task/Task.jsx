import React from 'react';
import './Task.css'

const Task = ({ label, important = false }) => {

  return (
        <div className="view">
          <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description">{ label }</span>
              <span className="created">{ label }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
  )
}


export default Task;