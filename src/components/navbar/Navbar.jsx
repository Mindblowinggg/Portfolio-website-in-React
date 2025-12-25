import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Styles from "./Navbar.module.css";
import logo from "/A.png";
import DarkModeToggle from "./DarkModeBtn";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { ThemeContext } from "../../context/Themecontext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opendropdown, setopendropdown] = useState(false);

  const { theme, handleToggle } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setopendropdown(false);
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setopendropdown(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 2.2, type: "spring" }}
      className={`${Styles.navbar} ${
        theme === "light" ? Styles.lightNavbar : Styles.darkNavbar
      } px-4 rounded-full`}
    >
      {/* --- LOGO SECTION --- */}
      <div className={Styles.navbarLogo}>
        <img src={logo} className="w-15 h-15" alt="" />
        <p
          className={`${Styles.logoText} ${
            theme === "light" ? Styles.amanKaharLight : Styles.amanKaharDark
          } ml-5`}
        >
          Aman
        </p>
        <p
          className={`${Styles.logoText} ${
            theme === "light" ? Styles.amanKaharLight : Styles.amanKaharDark
          }`}
        >
          Kahar
        </p>
      </div>

      <div className={Styles.navbarMenuContainer}>
        {/* --- TOGGLE TEXT (Hidden on very small screens optionally) --- */}
        <div className="hidden sm:flex justify-center items-center">
          <span className={Styles.modetext}>
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </span>
          <IoIosArrowRoundForward className="ml-1" />
        </div>

        <DarkModeToggle currentTheme={theme} onToggle={handleToggle} />

        {/* ======================================================= */}
        {/*  DESKTOP MENU (Laptop Screen) - Hover Logic Here      */}
        {/* ======================================================= */}
        <div className="hidden md:flex items-center ml-4">
          <div
            className="relative select-none cursor-pointer py-3 px-2"
            onClick={() => setopendropdown(!opendropdown)}
          >
            <div className="flex items-center font-semibold gap-1">
              Projects
              {opendropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>

            {/* Desktop Dropdown Box */}
            {opendropdown && (
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-50 rounded-lg shadow-xl py-2 z-50 ${
                  theme === "light" ? Styles.drop1divlight : Styles.drop1divdark
                }`}
              >
                <a
                  href="https://example-eight-fawn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center text-center hover:opacity-70 font-medium"
                >
                  Project 1
                </a>
              </div>
            )}
          </div>
        </div>

        {/* ======================================================= */}
        {/*  MOBILE MENU ICON (Hidden on Desktop)                 */}
        {/* ======================================================= */}
        <div className="relative md:hidden ml-2">
          <button
            onClick={() => toggleMenu()}
            className={`${
              theme === "light" ? Styles.menubtnLight : Styles.menubtnDark
            }`}
          >
            {menuOpen ? (
              <RiCloseFill
                className={`size-5 ${
                  theme === "light" ? Styles.menuLight : Styles.menuDark
                }`}
              />
            ) : (
              <RiMenu4Fill
                className={`size-5 ${
                  theme === "light" ? Styles.menuLight : Styles.menuDark
                }`}
              />
            )}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU CONTENT --- */}
        {menuOpen && (
          <div
            className={`absolute top-16 right-0 w-48 rounded-lg shadow-xl p-4 md:hidden ${
              theme === "light" ? Styles.menudivlight : Styles.menudivdark
            }`}
          >
            {/* Mobile Click Logic */}
            <div
              className="flex justify-between items-center cursor-pointer mb-2"
              onClick={() => setopendropdown(!opendropdown)}
            >
              Projects
              {opendropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>

            {opendropdown && (
              <div className="pl-4 border-l-2 border-gray-400">
                <a
                  href="https://example-eight-fawn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAllMenus}
                  className="block py-1 text-sm"
                >
                  Project 1
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
