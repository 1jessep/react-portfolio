import React from 'react';

import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';

const Social = () => {
return (
<div name='social' className='w-full h-screen bg-black text-gray-300'>
 
      <div className='max-w-[1000px] mx-auto p-40 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>Social</p>   
          </div>

          <div className=' grid grid-cols-3 sm:grid-cols-3 gap-20 items-center m-auto'>
              <div className='hover:scale-110 duration-500'>
              <a
              className='flex justify-between items-center  text-gray-300'
              href='http://www.github.com/1jessep'>
              <FaGithub size={70} />
            </a>
              </div>
              
              <div className='hover:scale-110 duration-500'>
              <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jessepstynchcomb/'
            >
              <FaLinkedin size={70} />
            </a>
              </div>

              <div className='hover:scale-110 duration-500'>
              <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:jessepstynchcomb@gmail.com'
            >
              <HiOutlineMail size={70} />
            </a>
              </div> 
          </div>
      </div>
    </div>
);
}

export default Social