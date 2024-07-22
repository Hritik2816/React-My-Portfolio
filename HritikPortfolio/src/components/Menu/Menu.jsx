import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 bg-gray-700 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex items-center 0" >
        <button
          className="ml-4 text-gray-500 hover:text-black focus:outline-none"
          onClick={handleToggle}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`flex flex-col gap-8 items-center  ${isOpen ? 'flex' : 'hidden'
          }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            onClick={() => setIsOpen(false)} // Add this line to close the menu when a link is clicked
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            onClick={() => setIsOpen(false)} // Add this line to close the menu when a link is clicked
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            onClick={() => setIsOpen(false)} // Add this line to close the menu when a link is clicked
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            onClick={() => setIsOpen(false)} // Add this line to close the menu when a link is clicked
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            onClick={() => setIsOpen(false)} // Add this line to close the menu when a link is clicked
          >
            Github
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => `rounded-md ${isActive ? "bg-gradient-to-r from-red-500 to-pink-500 bg-yellow-500 text-white px-4 py-2 border-none" : "bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 border-none"} hover:text-black lg:ml-8 `
            }
            onClick={() => setIsOpen(false)} // Add this line to close the menu when a link is clicked
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default MenuBar;