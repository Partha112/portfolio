import React from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = ({ theme, toggle_theme }) => {
  return (
    <div className="w-full overflow-x-hidden bg-background text-foreground">
      <header className="fixed top-0 left-0 w-full  z-50 transition-all duration-300 bg-background/90 backdrop-blur-md shadow-md transform-none">
        <nav className="container-custom mx-auto flex items-center justify-between py-4 px-52 gap-8">
          <a href="#home" className="logo font-bold font-heading text-2xl">
            <span className="text-blue-700">P</span>
            arth
            <span className="text-blue-700">A</span>
          </a>
          <ul className="flex gap-8 text-lg font-paragraph">
            <li>
              <a href="#home" className="hover">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover">
                Skill
              </a>
            </li>
            <li>
              <a href="#education" className="hover">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover">
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={toggle_theme}
            className={`flex items-center ${
              theme === "dark" ? "bg-gray-700" : "bg-slate-100"
            } rounded-full w-10 h-10 justify-center transition-colors duration-300 cursor-pointer`}
          >
            <i
              className={`ri-${
                theme === "light" ? "sun" : "moon"
              }-line text-lg`}
            ></i>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
