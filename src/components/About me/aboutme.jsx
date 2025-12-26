import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./aboutme.module.css";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaGamepad, FaCarSide } from "react-icons/fa";
import { ThemeContext } from "../../context/Themecontext";

// Variants for main container animation
const containerVariants = {
  hidden: { opacity: 0.95 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// Variants for fade-in animation of sections
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

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  const text = "About Me";

  return (
    <motion.div
      className={`${styles.aboutMeContainer} ${
        theme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Animated Heading */}
      <motion.h2
        className={`flex justify-center ${
          theme === "light" ? styles.headinglight : styles.headingdark
        }`}
      >
        {text}
      </motion.h2>

      {/* Project Experience Card */}
      <motion.div
        className={styles.contentSection}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.experienceCard}>
          <h3>3+</h3>
          <p>Project Completed</p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className={`${styles.description} lg:text-xl`}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Passionate front-end developer with a strong foundation in HTML, CSS,
        JSX, and React. I build intuitive and responsive web applications
        through self-initiated projects.
      </motion.p>

      {/* Hobbies Section */}
      <motion.div
        className={styles.hobbySection}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3
          className={
            theme === "light" ? styles.hobbyTextlight : styles.hobbyTextdark
          }
        >
          My Hobbies:
        </h3>

        <div className={styles.interestTags}>
          <div className={styles.tag}>
            <PiMicrophoneStageFill /> Performer
          </div>
          <div className={styles.tag}>
            <FaCarSide /> Travelling
          </div>
          <div className={styles.tag}>
            <FaGamepad /> Gaming
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
