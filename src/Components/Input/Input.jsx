import React from 'react';

const Input = ({ handleChange, className }) => {
  return (
    <input
      className={className}
      type="date"
      name=""
      id=""
      onChange={handleChange}
    />
  );
};

export default Input;
