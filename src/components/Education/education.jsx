import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./education.module.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { ThemeContext } from "../../context/Themecontext";

const containerVariants = {
  hidden: { opacity: 0.9 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// Variants for the fade-in animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Education = () => {
  const text = "Education";
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.educationContainer} ${
        theme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      {/* Animated Heading */}
      <motion.h2
        className={`flex justify-center ${
          theme === "light" ? styles.headinglight : styles.headingdark
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {text}
      </motion.h2>

      {/* Education Cards */}
      <motion.div
        className={styles.educationCards}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Card for Graduation */}
        <div
          className={`${styles.educationCard} ${
            theme === "light" ? styles.lightCard : ""
          }`}
        >
          <div className={styles.timeline}>
            <FaCalendarAlt className={styles.icon} />
            <span>2021 - 2025</span>
          </div>

          <div className={styles.degreeInfo}>
            <div className={`${styles.degreeTag} ${styles.graduationTag}`}>
              <GiGraduateCap className={styles.tagIcon} />
              <span>Graduation</span>
            </div>

            <h3>
              Bachelor's Degree <br />
              <span className={styles.major}>CSE</span>
            </h3>

            <p className={styles.universityLocation}>
              <GiGraduateCap className={styles.universityIcon} />
              Parul University
            </p>
            <p className={styles.universityLocation}>
              <FaMapMarkerAlt className={styles.locationIcon} /> Vadodara,
              Gujarat, India
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
