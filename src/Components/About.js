import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
               
            </div>
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4' >
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi Im Syed Jahangeer ,Nice to meet you. please take a look around</p>
                    </div>
                    <div>
                        <p>
                        Iam Passionate about building execellent software that imporves the lives of those around me .I specialize in createing software for clients ranging from individuals and smaall Business.
                        what would you do if you had  a software expert available at your fingertips?
                        </p>
                    </div>
                </div>
        </div>
        
        </div>
  )
}

export default About