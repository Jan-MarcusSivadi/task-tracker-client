import React, { Component } from 'react'
// import useScript from './hooks/useScript';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 PM',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 PM',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30 PM',
        reminder: false,
      },
      {
        id: 4,
        text: 'Study for School Exam',
        day: 'Feb 8th at 0:00 PM',
        reminder: true,
      },
    ],
  }

  render() {
    const { items } = this.state;

    // Add task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task }
      this.setState(state => ({
        items: [...state.items, newTask]
      }))

      // navigate(`/api/tasks/${id}`);
    }

    // Delete task
    const deleteTask = (id) => {
      this.setState(state => state.items.filter(task => task.id !== id))
      // setTasks(tasks.filter(task => task.id !== id));
    }

    // Toggle reminder
    const toggleReminder = (id) => {
      this.setState(state => state.items.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      ))
      // setTasks(
      //   tasks.map((task) =>
      //     task.id === id ? { ...task, reminder: !task.reminder } : task
      //   )
      // )
    }

    return (
      <Provider store={store}>
        <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />}
          {items.length > 0 ? (
            <Tasks tasks={items} onDelete=
              {deleteTask} onToggle={toggleReminder} />
          ) : (
            <label>There are no Tasks</label>
          )}
        </div>
      </Provider>
    )
  }
}

export default App
