import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import styles from "/src/assets/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Ozay Logo" />
        </Link>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/buttons" className={styles.navLink}>
                Buttons
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/alerts" className={styles.navLink}>
                Alerts
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/badges" className={styles.navLink}>
                Badges
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/cards" className={styles.navLink}>
                Cards
              </Link>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://github.com/helenaltv?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                <FaGithub size="1.5em" className={styles.githubIcon} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
