import React from 'react'
import ImageComponent from '../../AllImages/ImageComponent';

export default function About() {
  return (
    <div className="py-16 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 sm:items-center">
            <div className=' rounded-full w-80 h-80 mx-auto items-center overflow-hidden'>
              <ImageComponent width={200} height={200} />
            </div>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl dark:text-white">
              React developer and dedicated With a strong foundation in programming
            </h2>
            <p className="mt-6 text-gray-700 dark:text-white">
              Hello! I'm Hritik Kumar, a passionate and dedicated With a strong foundation in programming, I've developed a versatile skill set that includes proficiency in ReactJS, JavaScript, HTML, and CSS, allowing me to craft innovative and dynamic web applications. Further more, I have a solid understanding of Java and C programming languages, which has enabled me to tackle complex problems and develop efficient solutions.

            </p>
            <p className="mt-4 text-gray-700 dark:text-white">
              My enthusiasm for coding and ability to learn quickly has driven me to explore new technologies and stay updated with industry trends. I'm excited to leverage my skills and knowledge to make a meaningful impact in the tech industry and contribute to developing innovative solutions that can transform lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}