import React from "react";
import { FaBars, FaExpandArrowsAlt } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-darkSidebar fixed top-0 h-10 w-full px-4 py-3 flex justify-between items-center z-50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-gray-900/30 before:rounded before:-z-10">
      {/* Sidebar toggle button on the left */}
      <button onClick={toggleSidebar} className="text-white">
        <FaBars />
      </button>

      <span className="text-white font-semibold flex-grow text-center"></span>

      {/* Arrow icon on the right corner */}
      <FaExpandArrowsAlt className="text-white" />
    </nav>
  );
};

export default Navbar;
