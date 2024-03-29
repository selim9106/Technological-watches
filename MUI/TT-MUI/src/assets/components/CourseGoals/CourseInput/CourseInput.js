import React, { useState } from "react";
import styled from "styled-components";
// ?CSS import with styled-components 
// import Button from "../../UI/Button/Button";
// ?CSS import with CSS modules:
import Button from "../../UI/Button/Button_copy";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => props.invalid? "red": "black"};
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background-color: ${(props) => (props.invalid ? "#f1b8bc" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* 2 ways of changing input and label styles checking input content */}
      {/* <div className={ !isValid ? "form-control invalid" : "form-control" }> */}
      {/* <div className={`form-control ${!isValid ? 'invalid': ''}`}> */}

      {/* <FormControl className={!isValid && "invalid"}> */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// info: The trim() method removes whitespace from both ends of a string and returns a new string
