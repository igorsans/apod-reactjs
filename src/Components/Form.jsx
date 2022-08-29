import Button from "./Button/Button"
import Input from "./Input/Input"

const Form = ({handleClick, handleChange}) => {
  return (
    <form>
        <Input handleChange={handleChange}/>
        <Button handleClick={handleClick}/>
    </form>
  )
}

export default Form