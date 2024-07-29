import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 dark:bg-white dark:border-white ">
        <div className="md:flex md:justify-between">
          <div
            className="mr-2 h-12"
          />
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase ">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase ">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-1">
                  <a
                    href="https://github.com/Hritik2816"
                    className="hover:underline "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
