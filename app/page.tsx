"use client";

import Projects from "@/components/projects/Projects";
import Image from "next/image";
import React from 'react';
import { useRef } from 'react';
import {AiFillLinkedin,AiFillGithub,AiFillMail} from 'react-icons/ai';

export default function Home() {

  const aboutRef = useRef<HTMLInputElement | null>(null);
  const projectRef = useRef<HTMLInputElement | null>(null);
  const skillsRef = useRef<HTMLInputElement | null>(null);
  const contactRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className= 'dark'>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950 scroll-smooth'>
        <section className='min-h-screen'>
          <nav className='hidden lg:block md:block'>
          <h1 className='text-xl font-dancing hover:text-cyan-500 dark:text-white '> <a href='#' className='hover:text-cyan-500'> Hi, I'm Kshitij</a>  </h1>
              <nav className='hidden lg:block md:block'>
                <ul className='flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4'>
                  <button onClick={() => {aboutRef.current?.scrollIntoView({behavior:'smooth'})}} className='hover:text-cyan-500'> About</button>
                  <button onClick={() => {skillsRef.current?.scrollIntoView({behavior: 'smooth'})} } className='hover:text-cyan-500'> Skills </button>
                  <button onClick={() => {projectRef.current?.scrollIntoView({behavior: 'smooth'})}} className='hover:text-cyan-500'> Portfolio</button>
                  <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth' })} } className='hover:text-cyan-500'> Contact </button>
                </ul>
              </nav>

              <ul className='flex items-center justify-end'>
                <li> <a
                    href="https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing"
                    // alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"> 
                      <button className='bg-gradient-to-r from-cyan-700 to-cyan-500 hover:bg-gradient-to-l from-cyan-700 to from-cyan-500 px-6 py-2 text-white rounded-sm ml-8'>Resume </button> </a></li>
              </ul>

          </nav>


          {/* About */}

          <div className='text-center p-10 ' id='about' ref={aboutRef}>
            <h2 className='text-5xl py-10 text-teal-600 font-medium dark:text-gradient-to-r from-cyan-700 to-cyan-500 md:text-6xl'> 
            
              <h1 className='text-5xl py-2 mb-6 dark:text-white'>Cole Warner</h1>
            </h2>
              
            <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Full Stack Developer and ML Enthusiast</h3>
            <p className='text-md py-5 text-center leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>
              I'm a full stack developer and ML enthusiast with a degree in Electronics and Telecommunication engineering. 
              I'm passionate about leveraging my expertise in both front-end and back-end technologies to create innovative solutions. 
              With a deep understanding of machine learning algorithms and data analysis, I strive to develop intelligent systems that make a tangible impact. 
              Let's connect and embark on an exciting journey together in the realm of technology and innovation!
            </p>
            
            <div className='text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
              <a href='mailto:kshitijdarwhekar@gmail.com'  className='hover:text-cyan-500'><AiFillMail /></a>
              <a href='https://www.linkedin.com/in/kshitij-darwhekar-b15a33191/ '  className='hover:text-cyan-500'><AiFillLinkedin /></a>
              <a href='https://github.com/Kshitij-Darwhekar'  className='hover:text-cyan-500'><AiFillGithub /></a>
            </div>
            <div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
              {/* <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96'>
                <Image  src={kshitij} fill={true} />
              </div> */}
            </div>
          </div>


        </section>

        <div className="space-y-0" id="project-section">
          <Projects overwriteProjects={undefined} />
        </div>

      </main>
    </div>
  );
}
