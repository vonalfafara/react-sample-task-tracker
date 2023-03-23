const Button = ({ bgColor, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
