import Button from "./Button"

function Header({ title }) {
  function add() {
    console.log("Add task")
  }

  function remove() {
    console.log("Delete task")
  }

  function update() {
    console.log("Update task")
  }

  return (
    <div className="header">
      <h1>{title}</h1>
      <Button bgColor="green" text="Add" onClick={add} />
      <Button bgColor="red" text="Delete" onClick={remove} />
      <Button bgColor="blue" text="Update" onClick={update} />
    </div>
  )
}

export default Header
