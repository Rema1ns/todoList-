import React,{Component} from 'react';
import '../TaskFilter/TaskFilter.css'

export default class TaskFilter extends Component {

  buttons = [
    { name: 'all', label: 'all' },
    { name: 'active', label: 'active' },
    { name: 'Completed', label: 'Completed' }
  ]

  render() {

    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name
      const clazz = isActive ? 'selected' : ''

      return (

            <button
                key={name}
                onClick={() => onFilterChange(name)}
                className={`${clazz}`}>{label}</button>
      )
    })
    return (
        <ul className="filters">
          <li>
            {buttons}
          </li>
        </ul>
    )
  }
}