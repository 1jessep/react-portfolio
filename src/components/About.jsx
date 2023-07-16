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
              <p>Hi my name is Jessep Stynchcomb. I'm 30 years old and currently reside in Denton, Texas. 
                I graduated from Southern Methodist University's Fullstack Coding Bootcamp and 
                earned my certification in Fullstack Web Development. I am looking for a remote position 
                that will allow me to learn and grow as a young developer. I have worked on a variety of 
                different projects using Javascript, React.js, CSS, HTML, Node.js, Tailwind, Git, and more. 
                Thank you for your time and I hope to hear from you. 
  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;