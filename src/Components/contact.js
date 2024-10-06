import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full max-w-[2000px] h-screen flex justify-center items-center p-0 bg-[#0a192f] text-gray-300 '>
      <form action='https://getform.io/f/3be75ac1-bd0a-4392-bb16-32e7192e12b6' method='POST' className='flex flex-col max-w-[600px] w-full '>
        <div className='pb-10'>
          <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the Form Below or send me an email - jahangeer010@gmail.com or Contact WatsApp no +92323-7035144</p> 
          </div>
          <input type='text' placeholder='Enter your Name' name='name' className='p-2 bg-[#ccd6f6]'/>
          <input type='Email' placeholder='Enter your Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
          <textarea name='message' cols='30' rows='10' className='bg-[#ccd6f6] p-2 text-blue-800' placeholder='Message'></textarea>
          <div>          <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate </button>
</div>
      </form>
    </div>
  )
}

export default Contact