import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#008080ca] text-2xl text-gray-100 '>
   
      {/* navbar */}
      <ul className='hidden md:flex m-auto'>
        <li className='hover:scale-110 duration-300'>
          <Link to='home' smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to='social' smooth={true} duration={500}>
            Social
          </Link>
        </li>
      </ul>




      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>




      {/*Mobile*/}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={200}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={200}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={200}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={200}>
            Contact
          </Link>
          <li className='py-11 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='social' smooth={true} duration={200}>
            Social
          </Link>
        </li>
        </li>
      </ul> 
    </div>
  );
};

export default Navbar;