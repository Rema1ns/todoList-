import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './index.css';

class App extends Component {
  maxId = 100;

  state = {
    toDoData: [
      this.createTodoItem('Complete task'),
      this.createTodoItem('Edition task'),
      this.createTodoItem('Active task'),
    ],
    filter: this.filterShowAll,
    edit: false,
  };
  createTodoItem(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      className: '',
      tm: new Date(),
      edit: false,
    };
  } // ================= СОЗДАНИЕ ИТЕМА ===========>

  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  filterShowAll = 'all';
  filterShowActive = 'active';
  filterShowCompleted = 'Completed';
  filter(items, filter) {
    switch (filter) {
      case this.filterShowAll:
        return items;
      case this.filterShowActive:
        return items.filter((items) => !items.done);
      case this.filterShowCompleted:
        return items.filter((items) => items.done);
      default:
        return items;
    }
  } // ========================= ФИЛЬТР ===========>

  deleteCompleteItems = () => {
    this.setState(({ toDoData }) => {
      const newArray = [...toDoData];
      const arr = [];
      newArray.map((el) => {
        if (el.done === true) {
          return;
        } else {
          return arr.push(el);
        }
      });
      return {
        toDoData: arr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);
      const newArray = [...toDoData.slice(0, idx), ...toDoData.slice(idx + 1)];

      return {
        toDoData: newArray,
      };
    });
  }; // ====================== УДАЛЕНИЕ ИТЕМА ===========>

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ toDoData }) => {
      const newArr = [...toDoData, newItem];
      return {
        toDoData: newArr,
      };
    });
  }; // ================== ДОБАВЛЕНИЕ ИТЕМА ===========>

  onToggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  } // ====== ФУНКЦИЯ ТОГГЛ =========>

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      return { toDoData: this.onToggleProperty(toDoData, id, 'done') };
    });
  }; // ============== ВЫПОЛНЕНАЯ ЗАДАЧА ===========>

  onToggleEdit = (id) => {
    this.setState(({ toDoData }) => {
      return { toDoData: this.onToggleProperty(toDoData, id, 'edit') };
    });
  };

  // ======================================================== RENDER ===========>
  render() {
    const { toDoData, filter, edit } = this.state;

    const visibleItems = this.filter(toDoData, filter, edit);

    const doneCount = toDoData.filter((el) => el.done).length;
    const todoCount = toDoData.length - doneCount;
    return (
      <section className="todoapp">
        <header>
          <h1>todos</h1>
          <AppHeader addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            onToggleEdit={this.onToggleEdit}
            todos={visibleItems}
            delItem={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            delCompleteItems={this.deleteCompleteItems}
            filter={filter}
            filterShowAll={this.filterShowAll}
            filterShowActive={this.filterShowActive}
            filterShowCompleted={this.filterShowCompleted}
            onFilterChange={this.onFilterChange}
            todoCount={todoCount}
          />
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
