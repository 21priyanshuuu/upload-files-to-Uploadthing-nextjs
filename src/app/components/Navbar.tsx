// src/components/Navbar.tsx

import { FaHome, FaUserFriends, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* Your logo or brand icon */}
            <img
              className="h-10 w-auto"
src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png'
              alt="Logo"
            />
          </div>
          {/* Search bar (placeholder) */}
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 rounded-md text-sm font-medium text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>
          {/* Desktop nav items */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Navigation items */}
              <a
                href="#"
                className={`${
                  true ? 'bg-gray-200 text-gray-800' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900'
                } px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2`}
              >
                <FaHome />
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaUserFriends />
                <span>Team</span>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaBriefcase />
                <span>Projects</span>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
              >
                <FaEnvelope />
                <span>Calendar</span>
              </a>
            </div>
          </div>
          {/* Profile and settings */}
          <div className="flex items-center">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  {/* Profile image */}
                  {/* Name and email */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Dropdown menu, show/hide based on menu state. */}
              {/* Profile dropdown content */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
