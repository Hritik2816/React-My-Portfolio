import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl dark:bg-gray-800 dark:border-gray-700">
      <section className='min-h-screen' >
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white'>Developed by Hritik</h1>
        </nav>
        <div className="text-center p-10">
          <h2 className='text-5xl py-2 text-teal-600 font-medium '>Hritik Kumar</h2>
          <h3 className='text-2xl py-2 dark:text-white'>Developer and designer.</h3>
          <Link
            to="/">
          </Link>
          <p className='text-md py-5 leading-8 text-gray- dark:text-white'>
            Hello! I'm Hritik Kumar, a passionate and dedicated With a strong foundation in programming, <br />I've developed a versatile skill set that includes proficiency in ReactJS, JavaScript, HTML, and CSS,<br /> allowing me to craft innovative and dynamic web applications.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <NavLink
            to="https://x.com/hritikgupta2816"
            className="hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-900 lg:p-0">
            <AiFillTwitterCircle />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/hritik-kumar-28161011hrk"
            className="hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0">
            <AiFillLinkedin />
          </NavLink>
          <NavLink
            to="https://www.youtube.com/@THEAMIABLE"
            className="hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0">
            <AiFillYoutube />
          </NavLink>
        </div>
      </section>

    </div>
  );
}
