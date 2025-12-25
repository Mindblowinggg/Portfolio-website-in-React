import React, { useContext } from "react";
import styles from "./connect.module.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ThemeContext } from "../../context/Themecontext";

const Connect = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.connectContainer} ${
        theme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <h2
        className={`${styles.heading} ${styles.connectContainer} ${
          theme === "light" ? styles.headinglight : styles.headingdark
        }`}
      >
        Connect With Me
      </h2>

      <div className={styles.socialLinksGrid}>
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/aman-kahar-111453267/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialCard} ${
            theme === "light" ? styles.lightCard : styles.darkCard
          }`}
        >
          <div className={styles.socialIconWrapper}>
            <FaLinkedinIn className={styles.socialIcon} />
          </div>
          <span className={styles.socialName}>LinkedIn</span>
        </a>

        {/* Instagram Card */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialCard} ${
            theme === "light" ? styles.lightCard : styles.darkCard
          }`}
        >
          <div className={styles.socialIconWrapper}>
            <FaInstagram className={styles.socialIcon} />
          </div>
          <span className={styles.socialName}>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Connect;
