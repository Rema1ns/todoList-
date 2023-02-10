import React from 'react';
import ReactDOM from 'react-dom'

import AppHeader from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import './index.css'


const App = () => {

  const toDoData = [
    { label: 'Completed task', important: false, id: 1, className: 'completed' },
    { label: 'Editing task', important: true, id: 2, className: 'editing' },
    { label: 'Active task', important: false, id: 3  }
  ]


  return (
    <section className='todoapp'>
      <header>
        <h1>todos</h1>
        <AppHeader />
      </header>
      <section className="main">
        <TaskList todos={ toDoData }/>
        <Footer />
      </section>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))