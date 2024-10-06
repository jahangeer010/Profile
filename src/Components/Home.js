import React from 'react'
import { Link } from 'react-scroll'

import { HiArrowNarrowRight,HiDocumentDownload,HiDocument } from 'react-icons/hi'
function Home() {
  return (
    <>
    <div name='home'className='bg-[#201b1bc4] w-full h-screen'>
{/* Container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600 text-2xl'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#0a192f] '>Syed Jahangeer Junaid</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>ReactJS Developer</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>I`m a React stack Developer  focused on Building React Native and React Applications  </p>
<div>
<a href='../assets/Syed_Jahangeer.pdf' download>  <button  className=' group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Resume<span className=' duration-300'><HiDocument size={30} className='ml-3 ' /></span></button></a></div>
</div>

<div>
    
</div>
    </div>
    </>
    
  )
}

export default Home