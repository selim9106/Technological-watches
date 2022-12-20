import React from "react";
// ! CSS modules approach:
import styles from "./Button.module.css";


const Button = props => {
  return (
    // ! see how style got imported
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
