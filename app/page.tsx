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
              <nav className='p-10 mb-12 flex items-center justify-between dark:text-slate-400'>
              <h1 className='text-xl font-dancing hover:text-cyan-500 dark:text-white '> <a href='#' className='hover:text-cyan-500'> Cole's Portfolio</a>  </h1>
                <nav className='hidden lg:block md:block'>
                  <ul className='absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6'>
                    <button onClick={() => {aboutRef.current?.scrollIntoView({behavior:'smooth'})}} className='hover:text-cyan-500'> About</button>
                    <button onClick={() => {skillsRef.current?.scrollIntoView({behavior: 'smooth'})} } className='hover:text-cyan-500'> Skills </button>
                    <button onClick={() => {projectRef.current?.scrollIntoView({behavior: 'smooth'})}} className='hover:text-cyan-500'> Portfolio</button>
                    <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth' })} } className='hover:text-cyan-500'> Contact </button>
                  </ul>
                </nav>
                <ul className='flex items-center justify-end'>
                  <li> <a
                    href="https://colewarner24.github.io/resume/Cole%20Warner%20Resume.pdf"
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
              
            <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Full Stack Developer and QA Test Automation Engineer</h3>
            <p className='text-md py-5 text-center leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>
              
            </p>
            
            <div className='text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
              <a href='mailto:19cowarner@gmail.com'  className='hover:text-cyan-500'><AiFillMail /></a>
              <a href='https://www.linkedin.com/in/cole-warner/'  className='hover:text-cyan-500'><AiFillLinkedin /></a>
              <a href='https://github.com/colewarner24'  className='hover:text-cyan-500'><AiFillGithub /></a>
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
