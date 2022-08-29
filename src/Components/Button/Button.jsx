import React from 'react';

const Button = ({ handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      Enviar
    </button>
  );
};

export default Button;
