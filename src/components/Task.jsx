import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
  function remove() {
    onDelete(task.id)
  }
  function toggle() {
    onToggle(task.id)
  }
  function getReminderClass() {
    if (task.reminder) {
      return "reminder"
    }
    return ""
  }
  return (
    <div className={`task ${getReminderClass()}`} onDoubleClick={toggle}>
      <h3>
        {task.text} <FaTimes onClick={remove} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
