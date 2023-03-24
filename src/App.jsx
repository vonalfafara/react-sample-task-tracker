import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import "./App.css"
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appoinment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Son's baseball game",
      day: "Feb 11th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Boys' Nightout",
      day: "Feb 12th at 8pm",
      reminder: false,
    },
  ])
  let title = "Task Tracker"

  function addTask(task) {
    let id = tasks[tasks.length - 1].id + 1
    task.id = id

    let newTasks = [...tasks]
    newTasks.push(task)
    console.log(task)
    setTasks(newTasks)
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(newTasks)
  }

  function toggleReminder(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.reminder = !task.reminder
      }
      return task
    })
    setTasks(newTasks)
  }

  function toggleAddTaskComponent() {
    setShowAddTask(!showAddTask)
  }

  function showAddTaskComponent() {
    if (showAddTask) {
      return <AddTask onAdd={addTask} />
    }
  }

  return (
    <div className="container">
      <Header
        title={title}
        toggleAddTask={toggleAddTaskComponent}
        showAddTask={showAddTask}
      />
      {showAddTaskComponent()}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  )
}

export default App
