import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-xl sm:text-2xl font-medium text-white my-2 mx-3">
            <h2 className="text-white text-2xl">Poornima Batham</h2>
          </span>
        </a>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Nav items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 space-y-2 md:space-y-0">
            {["Home", "About", "Resume", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white md:p-0 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
