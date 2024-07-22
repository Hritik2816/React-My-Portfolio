import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import MenuBar from '../Menu/Menu';



export default function Header() {
  return (
    <header className="shadow-lg sticky z-50 top-0 ">
      <nav className=" bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 dark:border-gray-700">

        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex justify-center items-center">
            <div className="mr-3 h-12 sm:hidden">
              <MenuBar />
            </div>
          </div>
          <div className=" flex justify-center items-center sm:hidden">
            <ul >
              <li>
                <ThemeBtn />
              </li>
            </ul>
          </div>
          <div
            className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-0 font-medium lg:flex-row lg:space-x-8 lg:mt-1">

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
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
                >
                  Github
                </NavLink>
              </li>
              <div className='flex justify-end'>

                <li>
                  <div className="ml-auto">
                    <ThemeBtn />
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) => `rounded-md ${isActive ? "bg-gradient-to-r from-red-500 to-pink-500 bg-yellow-500 text-white px-4 py-2 border-none" : "bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 border-none"} hover:text-black lg:ml-8 `
                    }
                  >
                    Resume
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header >
  );
}

