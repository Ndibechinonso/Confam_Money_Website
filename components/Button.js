
const Button = ({ text, className, color, onclickFxn }) => {
  return (
    <button onClick={onclickFxn} className={`${className}`}>{text}</button>
  )
}

export default Button
