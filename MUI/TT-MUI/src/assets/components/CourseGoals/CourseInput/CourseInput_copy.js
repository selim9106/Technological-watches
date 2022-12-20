import React, { useState } from "react";
// ?CSS import with styled-components 
// import Button from "../../UI/Button/Button";
// ?CSS import with CSS modules (styles is an arbitrary variable name the dev chose)
import Button from "../../UI/Button/Button_copy";
import styles from "./CourseInput.module.css";

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
    <form onSubmit={ formSubmitHandler }>
      {/* add defult class form control with modules & check condition to add the "valid class" */}
      <div className={ `${styles['form-control']} ${!isValid && styles.invalid}` }>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// info: The trim() method removes whitespace from both ends of a string and returns a new string
// ! using CSS modules, calling class looks like <element className={style.class}> or className={`${styles[class-name]}`} for class with dash in name