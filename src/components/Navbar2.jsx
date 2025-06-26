import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-wide">
          Rozgaar<span className="text-yellow-300">Sathi</span>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Homepage"
              className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
