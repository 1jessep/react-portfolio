import React from "react";

import gamer2 from "../assets/gamer2.png";
import movies2 from "../assets/movies2.png";
import weather2 from "../assets/weather2.png";
import password2 from "../assets/password2.png";
import jate2 from "../assets/jate2.png";
import workday2 from "../assets/workday2.png";

import {
  FaGithub,
} from 'react-icons/fa';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600">
            Work
          </p>
          <p className="py-3 pb-0 text-xl">
            These are some of the projects I've been working on.
          </p>
        </div>
        

        {/* Projects Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pb-20">

          {/* The Triggered Gamer Project */}
          <div
            style={{ backgroundImage: `url(${gamer2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                The Triggered Gamer
              </span>
              <div className="pt-8 text-center">
                <a href="https://the-triggered-gamer.herokuapp.com/">
                  <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/1jessep/The_Triggered_Gamer'>
              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>


          {/* Movies That Move Project */}
          <div
            style={{ backgroundImage: `url(${movies2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movies That Move
              </span>
              <div className="pt-8 text-center">
                <a href="https://1jessep.github.io/moviesthatmoveproject/">
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/1jessep/moviesthatmoveproject'>
              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>


          {/* JATE Project */}
          <div
            style={{ backgroundImage: `url(${jate2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Just Another Text Editor
              </span>
              <div className="pt-8 text-center">
                <a href="https://jesseps-text-editor.herokuapp.com/">
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/1jessep/jesseps-text-editor'>
              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>


          {/* Weather Dashboard Project */}
          <div
            style={{ backgroundImage: `url(${weather2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://1jessep.github.io/jessepsweatherdashboard/">
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/1jessep/jessepsweatherdashboard'>
              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>

          {/* Password Gen Project */}
          <div
            style={{ backgroundImage: `url(${password2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Password Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://1jessep.github.io/module3passwordgenerator/">
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/1jessep/module3passwordgenerator'>
              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>


          {/* WorkDay Scheduler Project */}
          <div
            style={{ backgroundImage: `url(${workday2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Work Day Scheduler
              </span>
              <div className="pt-8 text-center">
                <a href="https://1jessep.github.io/coolworkdayscheduler//">
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/1jessep/coolworkdayscheduler'>
              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;