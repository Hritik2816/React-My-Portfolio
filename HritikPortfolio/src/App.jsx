import { BsFillMoonStarsFill } from 'react-icons/bs'
import './App.css'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import ImageComponent from './AllImages/ImageComponent'
import DesignImage from './AllImages/DesignImage'
import CodeImage from './AllImages/CodeImage'
import ConsultingImage from './AllImages/ConsultingImage'
import Web3 from './AllImages/Web3'
import Web2 from './AllImages/Web2'
import Web1 from './AllImages/Web1'
import Web4 from './AllImages/Web4'
import Web5 from './AllImages/Web5'
import Web6 from './AllImages/Web6'





function App() {


  return (
    <>
      <section className='min-h-screen' >
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>Developed by Hritik</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 ml-8 rounded-md' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hritik Kumar</h2>
          <h3 className='text-2xl py-2'>Developer and designer.</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            Hello! I'm Hritik Kumar, a passionate and dedicated With a strong foundation in programming, I've developed a versatile skill set that includes proficiency in ReactJS, JavaScript, HTML, and CSS, allowing me to craft innovative and dynamic web applications. Further more, I have a solid understanding of Java and C programming languages, which has enabled me to tackle complex problems and develop efficient solutions. My enthusiasm for coding and ability to learn quickly has driven me to explore new technologies and stay updated with industry trends. I'm excited to leverage my skills and knowledge to make a meaningful impact in the tech industry and contribute to developing innovative solutions that can transform lives.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className='bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mx-auto items-center overflow-hidden'>
          <ImageComponent src={Image} layout="fill" objectFit="cover" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
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
            <p className="text-gray-800 py-1">Figma</p>
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
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <ConsultingImage width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-grey ">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
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
      </section>
    </>
  )
}

export default App
