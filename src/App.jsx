import React, { useState } from "react";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Fotter from "./components/Fotter";
import GoToTop from "./components/GoToTop";

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggle_theme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } overflow-x-hidden min-h-screen`}
    >
      <Navbar theme={theme} toggle_theme={toggle_theme} />
      <Home />
      <About />
      <Skill />
      <Education />
      <Contact />
      <GoToTop />
      <Fotter />
    </div>
  );
};

export default App;
