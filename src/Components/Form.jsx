import Button from './Button/Button';
import Input from './Input/Input';
import S from './Form.module.css';

const Form = ({ handleClick, handleChange }) => {
  return (
    <form className={S.form}>
      <Input className={S.input} handleChange={handleChange} />
      <Button className={S.button} handleClick={handleClick} />
    </form>
  );
};

export default Form;
