import React from 'react';
import { useState, useEffect } from 'react'

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/tasks')
    const data = await res.json()

    // console.log(data)
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  // Add task
  const addTask = async (task) => {
    // console.log = function() {}
    // const response = undefined
    // try {
    //   response = await fetch('http://localhost:5000/api/');
    // } catch (err) {
    //   console.log('error: '+err.message)
    //   return
    // }

    const newTask = { 'id': (Math.floor(Math.random() * 1000000) + 1), 'text': task.text, 'day': task.day, 'reminder': task.reminder }
    // console.log('json: ' + JSON.stringify(newTask))
    setTasks([...tasks, newTask])
    
    const res = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTask),
    })
    const data = await res.json()
    
    // const id = Math.floor(Math.random() * 10000) + 1
    // const id = tasks.length
    // const newTask = { id, ...task }
    // console.log(id)

    // setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = async (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'DELETE',
    })
    // console.log(array)

  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    // console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
    const taskToToggle = await fetchTask(id)
    console.log('task: '+taskToToggle.id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedTask),
    })
    const data = await res.json()
    // console.log(data)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle={toggleReminder} />
      ) : (
        <label>There are no Tasks</label>
      )}
    </div>
  );
}

export default App;
