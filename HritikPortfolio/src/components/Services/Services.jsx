import React from 'react'
import { DesignImage, CodeImage, ConsultingImage, Web1, Web2, Web3, Web4, Web5, Web6 } from '../../AllImages/Index'

export default function Services() {
  return (
    <div className='dark:bg-gray-800 dark:border-gray-700'>
      <div >
        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-10 p-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <DesignImage width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Beautiful Designs
          </h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core
            design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <CodeImage width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Reactjs</p>
          <p className="text-gray-800 py-1">Tailwind</p>
          <p className="text-gray-800 py-1">JavaScript</p>
          <p className="text-gray-800 py-1">AppWrite</p>
          <p className="text-gray-800 py-1">Html</p>

        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <ConsultingImage width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can
            give you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Contact Us</h4>
          <p className="text-gray-800 py-1">Linkedin</p>
          <p className="text-gray-800 py-1">Instagram</p>
          <p className="text-gray-800 py-1">Facebook</p>
          <p className="text-gray-800 py-1">x</p>
        </div>
      </div>
      <div className="py-10 dark:text-white">
        <h3 className="text-3xl py-1 dark:text-grey ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Since the beginning of my journey as a freelance designer and
          developer,
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Web1
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Web2
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Web3
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"

          />
        </div>
        <div className="basis-1/3 flex-1">
          <Web4
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"

          />
        </div>
        <div className="basis-1/3 flex-1">
          <Web5
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"

          />
        </div>
        <div className="basis-1/3 flex-1">
          <Web6
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"

          />
        </div>
      </div>
    </div>
  )
}
