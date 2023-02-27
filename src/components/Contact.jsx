import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/2ae57c39-de5c-419e-8d36-aaf214c6151a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-7'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600 text-gray-100'>Contact</p> 
            </div>
            <input className='text-white bg-[black] p-1 border-2 border-teal-600 rounded' type="text" placeholder='Name' name='name' />
            <input className='text-white my-4 p-1 bg-[black] border-2 border-teal-600 rounded' type="email" placeholder='Email' name='email' />
            <textarea className='text-white bg-[black] p-1 border-2 border-teal-600 rounded' name="message" rows="10" placeholder='Message'></textarea>
            <button className='rounded text-white border-2 border-white hover:bg-teal-600 hover:border-teal-600 hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Reach Out</button>
        </form>
    </div>
  )
}

export default Contact