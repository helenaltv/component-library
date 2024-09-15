// src/components/Badge.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../assets/styles/Badge.module.css";

const Badge = ({ size, color, icon, children }) => {
  let sizeClass = size === "large" ? styles.large : styles.small;
  let colorClass = color === "yellow" ? styles.yellow : styles.gray;

  return (
    <span className={`${sizeClass} ${colorClass} ${styles.badge}`}>
      {icon && <FaStar className={styles.icon} />}
      {children}
    </span>
  );
};

export default Badge;
