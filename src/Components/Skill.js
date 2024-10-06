import React from 'react'
import HTML from '../assets/Html5.jpg'
import CSS from '../assets/css.png'
import FIREBASE from '../assets/firebase.png'
import GITHUB from '../assets/github.png'
import NODE from '../assets/node.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import JAVASCRIPT from '../assets/javascript.png'
import MONGO from '../assets/mongo.png'
function Skill() {
    return (
        <div name='skills' className='bg-[#6c6c68] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen/2'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>//These are the Technologies I`ve worked with</p>

                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={HTML} alt="HTML icon" />HTML</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={CSS} alt="CSS icon" />CSS</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={JAVASCRIPT} alt="JAVASCIPT icon" />JAVACRIPT</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={TAILWIND} alt="TAILWIND icon" />TAILWIND</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={NODE} alt="NODEJS icon" />NODE JS</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={MONGO} alt="MONGO icon" />MONGO DB</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={FIREBASE} alt="FIREBASE icon" />FIREBASE</span></div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '><span><img className='w-20 mx-auto mt-2' src={GITHUB} alt="GITHUBicon" />GITHUB</span></div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Skill