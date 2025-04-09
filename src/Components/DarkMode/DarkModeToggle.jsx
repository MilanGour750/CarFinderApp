import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`p-3 px-6 rounded-full font-medium transition duration-300 shadow-md ${
      darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-black hover:bg-gray-300"
    }`}
  >
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>
);

export default DarkModeToggle;
