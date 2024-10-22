import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-darkSidebar fixed top-0 w-full px-4 py-3 flex justify-between z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-gray-900/30 before:rounded before:-z-10">
      <button onClick={toggleSidebar} className="text-white">
        <FaBars />
      </button>
      <span className="text-white font-semibold">Dashboard</span>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
