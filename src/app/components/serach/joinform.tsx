import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Joinform = () => {
    return (
        <div className='bg-white rounded-lg p-5 shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] mt-7'>
            <h3 className='text-xl font-medium text-[#307FE2] flex gap-1.5 items-center'>
                <div className='bg-[#307FE2] w-1.5 h-3.5 rounded-sm'></div>Erectile Dysfunction
            </h3>
            <h2 className='text-2xl font-medium text-black mt-2'>
                Join the community
            </h2>
            <p className='text-base font-normal text-[#737373]'>
                Erectile Wellness Insights: Navigating Causes, Solutions, and Emotional Well-being - Your Guide to a Fulfilling Intimate Health Journey
            </p>
            <div className='bg-white flex items-center w-full border border-[#C6C6C6] rounded-lg px-4 mt-5'>
                <input type='email' placeholder='Enter your email' className='text-lg py-1.5 text-black bg-transparent outline-none ring-0 w-full' />
                <button className="text-black cursor-pointer hover:scale-105 text-2xl">
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    )
}

export default Joinform