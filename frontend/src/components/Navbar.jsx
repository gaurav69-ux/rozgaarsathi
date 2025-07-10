import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/Homepage"
              className="text-2xl font-bold text-white tracking-wide"
            >
              Rozgaar<span className="text-yellow-300">Sathi</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
            >
              Sign Out
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/Homepage"
            className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/"
            className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
