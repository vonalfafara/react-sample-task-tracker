import Button from "./Button"

function Header({ title, toggleAddTask, showAddTask }) {
  function toggleAdd() {
    toggleAddTask()
  }

  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        bgColor={showAddTask ? "red" : "green"}
        text={showAddTask ? "Hide" : "Add"}
        onClick={toggleAdd}
      />
    </div>
  )
}

export default Header
