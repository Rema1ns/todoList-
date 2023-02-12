import React, {Component} from 'react';
import ReactDOM from 'react-dom'


import AppHeader from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import './index.css'



class App extends Component {

  state = {
    toDoData: [
      {label: 'Completed task', important: false, id: 1, className: 'completed'},
      {label: 'Editing task', important: true, id: 2, className: 'editing'},
      {label: 'Active task', important: false, id: 3}
    ]
  }

  delItem = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id)
      const newArray = [
          ...toDoData.slice(0, idx),
          ...toDoData.slice(idx + 1)
      ]

      return {
        toDoData: newArray
      }
    })
}

  render() {

    return (
        <section className='todoapp'>
          <header>
            <h1>todos</h1>
            <AppHeader/>
          </header>
          <section className="main">
            <TaskList
                todos={this.state.toDoData}
                delItem={ this.delItem }/>
            <Footer/>
          </section>
        </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))