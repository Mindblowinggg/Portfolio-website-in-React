import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./skill.module.css";
import { FaHtml5 } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaCss3Alt } from "react-icons/fa";
import { TbFileTypeJsx } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../../context/Themecontext";

// Variants for the heading (individual letters)
const headingContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for the fade-in animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {
  const text = "Skills";
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.skillsContainer} ${
        theme === "light" ? styles.lightContainer : styles.darkContainer
      }`}
    >
      <motion.h2
        className={`${styles.heading} flex justify-center ${
          theme === "light" ? styles.titlelight : styles.titledark
        }`}
        variants={headingContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        {text}
      </motion.h2>

      {/* Design Tools Section */}
      <motion.div
        className={styles.skillsGroup}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3
          className={`${styles.groupHeading} ${
            theme === "light" ? styles.headinglight : styles.headingdark
          }`}
        >
          Design Tools I Use
        </h3>
        <div className={styles.skillsList}>
          <div className="flex justify-center items-center gap-2">
            <CgFigma />
            <p>Figma</p>
          </div>
        </div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className={`${styles.skillsGroup}`}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3
          className={`${styles.groupHeading} ${
            theme === "light" ? styles.headinglight : styles.headingdark
          }`}
        >
          Technologies I Use
        </h3>
        <div className={`${styles.skillsList} `}>
          <div className="flex justify-center items-center gap-2">
            <FaHtml5 />
            <p>HTML5</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaCss3Alt />
            <p>CSS3</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <RiTailwindCssFill />
            <p>TAILWINDCSS</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <TbFileTypeJsx />
            <p>JSX</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaReact />
            <p>REACT</p>
          </div>
        </div>
      </motion.div>

      {/* Development & Productivity Tools Section */}
      <motion.div
        className={styles.skillsGroup}
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3
          className={`${styles.groupHeading} ${
            theme === "light" ? styles.headinglight : styles.headingdark
          }`}
        >
          Development & Productivity Tools I Use
        </h3>
        <div className={styles.skillsList}>
          <div className="flex justify-center items-center gap-2">
            <VscVscode />
            <p>VS CODE</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaGithub />
            <p>GITHUB</p>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <a href="https://github.com/Mindblowinggg" target="blank">
          <motion.button
            className={`px-10 flex items-center justify-center cursor-pointer rounded-3xl py-3 mt-9 border-3 border-amber-400 transform transition-transform duration-300 hover:scale-105 ${
              theme === "light" ? styles.resumeBtnLight : styles.resumeBtnDark
            }`}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <FaGithub className="mr-2" />
            See GitHub
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Skills;
