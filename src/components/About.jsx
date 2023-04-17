import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className=' m-auto pb-9'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          </div>

          <div className='max-w-[600px] w-full grid text-2xl gap-8 px-4'>
            <div>
              <p>I am a full stack web developer that currently
                resides in Denton, Texas. I hope to 
                find a job that allows me to learn and grow as a developer. I graduated the SMU Coding Bootcamp and I'm certified in HTML, CSS, JAVASCRIPT, REACT, and more.
                 I believe I can be
                a major asset to any team. Thanks for stopping by and let me know what you think!  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;