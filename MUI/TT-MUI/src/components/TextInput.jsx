import React, { useState } from 'react';

import Button from './Button';
import './TextInput.css';

const TextInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [validInput, setValidInput] = useState(true);

  const InputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValidInput(false);
      return;
  }
    props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !validInput ? "red" : "inherit" }}>
          Items List
        </label>
        <input
          type="text"
          style={{
            borderColor: !validInput ? "red" : "inherit",
            backgroundColor: !validInput ? "#FFE4E1" : "inherit",
          }}
          onChange={InputChangeHandler}
        />
      </div>
      <Button type="submit">Add Item to list</Button>
    </form>
  );
};

export default TextInput;
