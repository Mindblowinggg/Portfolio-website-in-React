import React, { useContext, useEffect, useState } from "react";
import Herostyles from "./hero.module.css";
import { ThemeContext } from "../../context/Themecontext";

const Typingeffect = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [showCursor, setShowCursor] = useState(true);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const texts = [
      "A FrontEnd Developer",
      "Building Imagination into Reality",
      "A React Enthusiast",
    ];

    const handleTyping = () => {
      const fullText = texts[textIndex];
      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(90);
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(60);
      }
    };

    if (!isDeleting && typedText === texts[textIndex]) {
      setTypingSpeed(1500);
      setIsDeleting(true);
    } else if (isDeleting && typedText === "") {
      if (textIndex === texts.length - 1) {
        setTypingSpeed(1000);
        setTimeout(() => {
          setIsDeleting(false);
          setTextIndex(0);
        }, 1000);
        return;
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => prevIndex + 1);
        setTypingSpeed(500);
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex, typingSpeed]);

  return (
    <div>
      <p
        className={`text-3xl mt-5 ${
          theme === "light" ? Herostyles.ptaglight : Herostyles.ptagdark
        }`}
        style={{ overflowWrap: "break-word" }}
      >
        {typedText}
        <span
          className={Herostyles.cursor}
          style={{ opacity: showCursor ? 1 : 0 }}
        >
          |
        </span>
      </p>
    </div>
  );
};

export default Typingeffect;
