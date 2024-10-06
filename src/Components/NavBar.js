import React ,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFilePersonFill} from 'react-icons/bs'
import { Link } from 'react-scroll'
function NavBar() {
  const [nav,SetNav]=useState(false)
  const handleClick=()=>SetNav(!nav)
  return (
    <>
    <div className='fixed w-full h-[80px]   flex justify-between   items-center px-4 bg-[#0a192f]  text-gray-300  '>
      <div><p className='border-t-4 border-r-4 border-l-2  bg-pink-600 px-10 '>S J</p>
      <span className='hover:bg-[#8892b0]'>Syed Jahangeer</span>
      </div>
      <div>
        {/* Menu */}
        <ul className='hidden md:flex '>
          <li className='px-4 hover:border-b-4 text-gray-300 border-pink-600'>
            <Link to='home' smooth={true} duration={500}>Home</Link>
          </li>
        <li className='px-4 hover:border-b-4 text-gray-300 border-pink-600'>
        <Link to='about' smooth={true} duration={500}>About</Link></li>
        <li className='px-4 hover:border-b-4 text-gray-300 border-pink-600'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='px-4 hover:border-b-4 text-gray-300 border-pink-600'><Link to='work' smooth={true} duration={500}>Work</Link></li>
        <li className='px-4 hover:border-b-4 text-gray-300 border-pink-600'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
          </ul>
      </div> 
      {/* Hamburger */}
      
      <div onClick={handleClick} className='md:hidden z-10 absolute items-center   right-3  ' >
        {!nav?<FaBars/>:<FaTimes/>}
      </div>
      {/* Mobile Menu */}
      <div >
        <ul className={!nav?'hidden':' absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li  className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
      {/* Social Icons  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[100px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[1px] duration-300 bg-blue-600'> 
            <a className='flex justify-between items-center w-full text-gray-300 bg-blue-500' 
            href='https://www.linkedin.com/in/syed-jahangeer-junaid-39817a56/'>
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[100px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[1px] duration-300  bg-[#2726262c] mt-2'> 
            <a className='flex justify-between items-center w-full text-gray-300 bg-[#333333]' 
            href='https://github.com/jahangeer010'>
               GitHub <FaGithub size={30}/>
            </a>
          </li>
          {/* <li className='w-[100px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[1px] duration-300 bg-[#a9f3e3] mt-2'> 
            <a className='flex justify-between items-center w-full text-[#333333] bg-[#17e7ba]' 
            href='jahangeer010@gmail.com'>
              abcd <HiOutlineMail size={30}/>
            </a>
          </li> */}
          <li className='w-[100px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[1px] duration-300 bg-[#565f69] mt-2'> 
            <a className='flex justify-between items-center w-full text-gray-300 bg-blue-500' 
            href='../assets/Syed_Jahangeer.pdf' download>
              Resume <BsFilePersonFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
    
    </>
  )
}

export default NavBar