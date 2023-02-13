import React, {Component} from 'react';
import ReactDOM from 'react-dom'


import AppHeader from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import './index.css'



class App extends Component {

  maxId = 100

  state = {
    toDoData: [
        this.createTodoItem('Complete task'),
        this.createTodoItem('Edition task'),
        this.createTodoItem('Active task'),
    ],
    filter: 'all'
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
      className: ''
    }
  }  // ================= СОЗДАНИЕ ИТЕМА ===========>

  onFilterChange = (filter) => {
    this.setState({filter})
  }
  filter(items, filter) {
    switch (filter) {
      case 'all': return items;
      case 'active': return items.filter((items) => !items.done)
      case 'Completed': return items.filter((items) => items.done)
      default: return items
    }
  }  // ========================= ФИЛЬТР ===========>

  delCompleteItems = () => {
    this.setState(({ toDoData }) => {
      const newArray = [ ...toDoData ]
      const arr = []
      newArray.map((el) => {
        if (el.done == true) {

        } else {
          arr.push(el)
        }
      })
      return {
        toDoData: arr
      }
    })
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
} // ====================== УДАЛЕНИЕ ИТЕМА ===========>

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ toDoData }) => {
      const newArr = [...toDoData, newItem ]
      return {
        toDoData: newArr
      }
    })
  } // ================== ДОБАВЛЕНИЕ ИТЕМА ===========>

  onToggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName]}
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  } // ====== ФУНКЦИЯ ТОГГЛ =========>

  onToggleImportant = (id) => {
    this.setState(({ toDoData }) => {
      return { toDoData: this.onToggleProperty(toDoData, id, 'important')}
    })
  };   // ========== ВАЖНАЯ ЗАДАЧА ===========>

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      return { toDoData: this.onToggleProperty(toDoData, id, 'done')}
    })
  } // ============== ВЫПОЛНЕНАЯ ЗАДАЧА ===========>


// ======================================================== RENDER ===========>
  render() {
    const { toDoData, filter } = this.state

    const visibleItems = this.filter(toDoData, filter)

    const doneCount = toDoData.filter((el) => el.done).length
    const todoCount = toDoData.length - doneCount;
    return (

        <section className='todoapp'>
          <header>
            <h1>todos</h1>
            <AppHeader
                addItem={ this.addItem }/>
          </header>
          <section className="main">
            <TaskList
                todos={visibleItems}
                delItem={ this.delItem }
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}/>
            <Footer
                delCompleteItems={this.delCompleteItems}
                filter={ filter }
                onFilterChange={this.onFilterChange}
                todoCount={ todoCount }/>
          </section>
        </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))