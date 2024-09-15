import React from "react";
import styles from "/src/assets/styles/Button.module.css";

function MyButton({ size, color, disabled, children }) {
  // Determine the size and color classes
  let sizeClass = size === "large" ? styles.large : styles.small;
  let colorClass = color === "red" ? styles.red : styles.blue;

  return (
    <button
      className={`${styles.button} ${sizeClass} ${colorClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default MyButton;
