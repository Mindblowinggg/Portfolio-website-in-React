import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero section/Hero.jsx";
import AboutMe from "./components/About me/aboutme.jsx";
import Education from "./components/Education/education.jsx";
import Certificates from "./components/certificate/certificate.jsx";
import Skills from "./components/skills/skills.jsx";
import Connect from "./components/connect with me/connect.jsx";
import Projects from "./components/projects/Projects.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Education />
              <Certificates />
              <Skills />
              <Connect />
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
