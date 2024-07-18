import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
              React developer and dedicated With a strong foundation in programming
            </h2>
            <p className="mt-6 text-gray-700">
              Hello! I'm Hritik Kumar, a passionate and dedicated With a strong foundation in programming, I've developed a versatile skill set that includes proficiency in ReactJS, JavaScript, HTML, and CSS, allowing me to craft innovative and dynamic web applications. Further more, I have a solid understanding of Java and C programming languages, which has enabled me to tackle complex problems and develop efficient solutions.

            </p>
            <p className="mt-4 text-gray-700">
              My enthusiasm for coding and ability to learn quickly has driven me to explore new technologies and stay updated with industry trends. I'm excited to leverage my skills and knowledge to make a meaningful impact in the tech industry and contribute to developing innovative solutions that can transform lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}