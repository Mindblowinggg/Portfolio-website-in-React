import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Herostyles from "./hero.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import Reacticon from "./icons/reacticon";
import Htmlicon from "./icons/htmlicon";
import Jsicon from "./icons/jsicon";
import Cssicon from "./icons/cssicon";
import Typingeffect from "./typingeffect";
import Lottie from "lottie-react";
import PfpanimationLight from "./icons/man with laptop Light.json";
import PfpanimationDark from "./icons/man with laptop Dark.json";
import HelloanimationDark from "./icons/helloDark.json";
import HelloanimationLight from "./icons/helloLight.json";
import { ThemeContext } from "../../context/Themecontext";

const Hero = ({ currentTheme }) => {
  const videoUrls = [
    "https://videos.pexels.com/video-files/2516160/2516160-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/5377274/5377274-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/33230270/14159474_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/5585983/5585983-hd_1080_1920_30fps.mp4",
  ];

  const { theme } = useContext(ThemeContext);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const placeholderImageUrl =
    "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg";

  return (
    <div
      className={`${Herostyles.container} ${
        theme === "light" ? Herostyles.lightContainer : Herostyles.darkContainer
      }`}
    >
      <AnimatePresence>
        <motion.video
          key={currentVideoIndex}
          className={Herostyles.backgroundVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          loop={false}
          poster={placeholderImageUrl}
        >
          <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
        </motion.video>
      </AnimatePresence>
      <div
        className={`${
          theme === "light"
            ? Herostyles.videoOverlayLight
            : Herostyles.videoOverlayDark
        }`}
      ></div>

      <div className={Herostyles.textsection}>
        <motion.h1
          className={`text-6xl flex items-center ${
            theme === "light" ? Herostyles.headingLight : Herostyles.headingDark
          }`}
        >
          <motion.div className={Herostyles.wave}>
            <Lottie
              animationData={
                theme === "light" ? HelloanimationLight : HelloanimationDark
              }
            />
          </motion.div>
          Hello! I'm
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className={`text-[#efae02] ml-3 ${
              theme === "light" ? Herostyles.spanlight : Herostyles.spandark
            }`}
          >
            Aman Kahar
          </motion.span>
        </motion.h1>

        <Typingeffect currentTheme={currentTheme} />

        <a href="/RESUME.pdf" download="MyResume.pdf">
          <button
            className={`px-10 flex items-center justify-center cursor-pointer rounded-3xl py-3 mt-9 border-3 border-amber-400 transform transition-transform duration-300 hover:scale-105 ${
              theme === "light"
                ? Herostyles.resumeBtnLight
                : Herostyles.resumeBtnDark
            }`}
          >
            Resume
            <FiDownloadCloud className="ml-2" />
          </button>
        </a>
      </div>

      <Reacticon />
      <Htmlicon />
      <Jsicon />
      <Cssicon />
      <motion.div
        className={Herostyles.imageBottom}
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Lottie
          animationData={
            theme === "light" ? PfpanimationLight : PfpanimationDark
          }
        />
      </motion.div>
    </div>
  );
};

export default Hero;
