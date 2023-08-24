import React from 'react';
import avi from '../assets/avi.png'
import Typical from 'react-typical';

const Home = () => {
  return (
    <div name='home' className='w-full bg-[black]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 py-40 flex flex-col justify-center h-full'>
        
      <p className='text-[#8892b1] py-4 mx-auto text-2xl max-w-[500px]'>
          Hi, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f5] '>
          Jessep Stynchcomb
        </h1>
        <div>
        <img className=' h-[400px] object-contain m-auto p-8' src={avi} alt="face" />
                  <p className='my-auto'>Me</p>
              </div>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b1]'>
        <Typical
            loop={Infinity}
            steps={[
    
              "I'm a Full Stack Web Developer",
              2000,
              
            ]}
          />
        </h2>
        <p className='text-[teal] py-4 mx-auto text-2xl max-w-[500px]'>
          Welcome to my portfolio.
        </p>

        <div>
        <a href="https://drive.google.com/file/d/19qdD9fLJ2VSjCHq6xf-Z-zLgkBAKwHO7/view?usp=sharing">
          <button className='text-white border-2 rounded px-6 py-3 my-2 mx-auto flex items-center hover:bg-[#008080ac] hover:border-[#0080806a] hover:text-gray-100 md:animate-pulse'>
            Download Resume
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;