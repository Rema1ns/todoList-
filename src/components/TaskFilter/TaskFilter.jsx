import React,{Component} from 'react';
import '../TaskFilter/TaskFilter.css'
import PropTypes from "prop-types";

export default class TaskFilter extends Component {

  static defaultProps = {
    onFilterChange: (() => {}),
    filter: 'all'
  }

  static propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string
  }

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