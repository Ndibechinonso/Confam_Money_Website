
const Button = ({ text, className, color, onclickFxn }) => {
  return (
    <button onClick={onclickFxn} whileHover={{scale: 1.1, textShadow: `0px 0px 8px ${color}`}} className={`bg-btncolor text-white ${className}`}>{text}</button>
  )
}

export default Button
