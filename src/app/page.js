"use client";
import { useState, useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillContacts,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import profile from "../../public/profile.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";

export default function Home() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="bg-white px-4 md:px-8 lg:px-12 xl:px-24 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-4 mb-6 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">JahidPortfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 md:ml-8"
                  href="/Jahid.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-4 md:p-10 py-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">
              Jahid Hassan
            </h2>
            <h3 className="text-xl md:text-2xl py-2 dark:text-white">
              Frontend Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Embarking on the digital journey as a Pixel Poet, I weave spells
              with HTML, CSS, and JavaScript. My code whispers tales, crafting
              immersive web experiences that dance on the edge of innovation.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://twitter.com/jahidhassanf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle className="text-teal-500 hover:text-teal-700 transition duration-300 ease-in-out cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="text-teal-500 hover:text-teal-700 transition duration-300 ease-in-out cursor-pointer" />
              </a>
              <a
                href="https://github.com/jahid-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-teal-500 hover:text-teal-700 transition duration-300 ease-in-out cursor-pointer" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={profile}
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a passionate Junior Frontend Developer, I leverage a powerful
              stack of technologies, including HTML, CSS, and JavaScript, to
              craft engaging and visually appealing web experiences. My journey
              involves constant learning, adaptation, and a fervent commitment
              to contributing to seamless user interactions.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Beyond development, I offer a diverse set of services,
              encompassing programming and teaching, aimed at delivering
              comprehensive solutions to digital challenges.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} alt="code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Expertise</h3>
              <p className="py-2">
                I specialize in creating elegant designs tailored to meet your
                unique needs, adhering to core design principles and user
                experience best practices.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Expertise</h4>
              <p className="text-gray-800 py-1">JavaScript (ES6)</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Firebase</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} alt="code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Comfortable</h3>
              <p className="py-2">
                Turning your ideas into reality is my forte. I specialize in
                developing exceptional websites that bring your visions to life.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Comfortable</h4>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Rest APIs</p>
              <p className="text-gray-800 py-1">Express.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Familiar</h3>
              <p className="py-2">
                If you're seeking feedback for your current project, I can
                provide valuable tips and tricks to elevate its performance and
                impact.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Familiar</h4>
              <p className="text-gray-800 py-1">Material UI</p>
              <p className="text-gray-800 py-1">Vue.js</p>
              <p className="text-gray-800 py-1">Framer Motion</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a dedicated frontend web developer, my professional journey has
              been defined by a series of engaging projects that showcase my
              expertise in crafting visually stunning and user-centric web
              applications. Collaborating with agencies and providing consulting
              services to startups, I've had the privilege of contributing to
              cutting-edge solutions that prioritize seamless user experiences.
              These projects not only highlight my proficiency in HTML, CSS, and
              JavaScript but also underscore my commitment to staying at the
              forefront of frontend technologies.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Explore the portfolio below to discover the frontend magic behind
              each project. Click on the images to delve into the world where
              design meets functionality, and user interfaces come to life with
              a touch of innovation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105">
              <a href="https://cultural-vibrance-website.web.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web1}
                  alt="Image1"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105">
              <a href="https://online-assignment-client.web.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web2}
                  alt="Image2"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105">
              <a href="https://food-and-beverage-client.firebaseapp.com/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web3}
                  alt="Image3"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105">
              <a href="https://chatvista-online-forum-client.web.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={web4}
                  alt="Image4"
                />
              </a>
            </div>
          </div>
        </section>
        <div className="flex justify-between">
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Education</h3>
              <div>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  BSc in Computer Science and Engineering
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Green University of Bangladesh
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  2022-2025
                </p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Experience</h3>
              <div className="mb-4">
                <h4 className="text-lg dark:text-white ">Graphic Designer</h4>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  CreativeIt Institute - June 2021 to January 2022
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Worked on Logo and Brand Identity
                </p>
              </div>
            </div>
          </section>
        </div>
        <footer className="text-center py-5 dark:text-white border-t border-gray-300">
          <h1 className="font-burtons text-xl">JahidPortfolio</h1>
          <div className="flex items-center justify-center mt-2">
            <AiOutlineMail className="text-xl mr-2" />
            <a
              href="mailto:mrjahidhassan0@gmail.com"
              className="text-md py-2 leading-8 text-teal-500"
            >
              Email: mrjahidhassan0@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center mt-2">
            <AiFillContacts className="text-2xl mr-2" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-md py-2 leading-8 text-teal-500"
            >
              +8801902123338
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Jahid Hassan. All rights reserved.
          </p>
        </footer>
      </section>
    </div>
  );
}
