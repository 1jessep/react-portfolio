import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-14'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-14 px-8'>
            <div className='sm:text-right text-5xl font-bold'>
              <p>Hi, my name is Jessep. Thanks for stopping by.</p>
            </div>
            <div className='text-xl text-left'>
              <p>I am a full stack web developer that currently
                resides in Denton, Texas. I hope to 
                find a job that allows me to learn and grow as a developer. I graduated the SMU Coding Bootcamp and I'm certified in HTML, CSS, JAVASCRIPT, REACT, and more.
                 I believe I can be
                a major asset to any team. Please take a look around and let me know what you think!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;