import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  function taskInput(e) {
    setTask(e.target.value)
  }

  function dayInput(e) {
    setDay(e.target.value)
  }

  function reminderInput(e) {
    setReminder(e.target.checked)
  }

  function submitTask(e) {
    e.preventDefault()

    if (!task) {
      alert("No task provided. Please add task name")
      return
    }
    if (!day) {
      alert("No day provided. Please add day")
      return
    }
    const newTask = {
      text: task,
      day: day,
      reminder: reminder,
    }

    onAdd(newTask)

    setTask("")
    setDay("")
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={submitTask}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" value={task} onChange={taskInput} />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input type="text" value={day} onChange={dayInput} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="remindeer">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={reminderInput}
        />
      </div>
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  )
}

export default AddTask
