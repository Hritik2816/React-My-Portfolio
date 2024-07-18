import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { ImageComponent } from '../../AllImages/Index'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <section className='min-h-screen' >
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>Developed by Hritik</h1>
        </nav>
        <div className="text-center p-10">
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hritik Kumar</h2>
          <h3 className='text-2xl py-2'>Developer and designer.</h3>
          <Link
            to="/">
          </Link>
          <p className='text-md py-5 leading-8 text-gray-800'>
            Hello! I'm Hritik Kumar, a passionate and dedicated With a strong foundation in programming, I've developed a versatile skill set that includes proficiency in ReactJS, JavaScript, HTML, and CSS, allowing me to craft innovative and dynamic web applications. Further more, I have a solid understanding of Java and C programming languages, which has enabled me to tackle complex problems and develop efficient solutions. My enthusiasm for coding and ability to learn quickly has driven me to explore new technologies and stay updated with industry trends. I'm excited to leverage my skills and knowledge to make a meaningful impact in the tech industry and contribute to developing innovative solutions that can transform lives.
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
        <div className='bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mx-auto items-center overflow-hidden'>
          <ImageComponent width={100} height={100} />
        </div>
      </section>

    </div>
  );
}
