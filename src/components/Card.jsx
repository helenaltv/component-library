// src/components/Card.jsx
import React from "react";
import styles from "../assets/styles/Card.module.css"; // Import the CSS module for styling

const Card = ({ href, imgAlt, imgSrc, children = "primary" }) => {
  const hasImage = !!imgSrc;

  const CardContent = (
    <>
      {hasImage && (
        <div className={styles.cardImageContainer}>
          <img src={imgSrc} alt={imgAlt} className={styles.cardImage} />
        </div>
      )}
      <div className={styles.cardContent}>{children}</div>
    </>
  );

  return (
    <div className={styles.card}>
      <a href={href}>{CardContent}</a>
    </div>
  );
};

export default Card;
