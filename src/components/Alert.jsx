import React from "react";
import styles from "../assets/styles/Alerts.module.css";

const Alert = ({ onClose, children }) => {
  return (
    <div className={styles.alert}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Alert;
