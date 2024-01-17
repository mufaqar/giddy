import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareButtons = ({data}:any) => {
    console.log("🚀 ~ ShareButtons ~ data:", data)
    return (
        <div>
            <ul className='flex md:flex-col flex-row flex-wrap md:gap-6 gap-3 items-start w-fit mx-auto'>
               {
                data?.subtopics?.slice(0,3)?.map((item:any,idx:number)=>(
                    <li key={idx}>
                    <span className={`md:text-base text-xs font-medium text-black bg-[#EEEEEE] py-2 px-4 rounded-full`}>
                        {item.name}
                    </span>
                </li>
                ))
               }
                
                <li>
                    <Link href="#" className='inline-flex items-center justify-center md:w-12 w-8 md:h-12 h-8 rounded-full border border-[#E9E9E9] bg-white text-black hover:bg-black hover:text-white hover:scale-95 transition-all duration-200 ease-linear shadow-[0_0px_q0px_0px_rgba(0,0,0,0.5)]'>
                        <FaFacebookF />
                    </Link>
                </li>
                <li>
                    <Link href="#" className='inline-flex items-center justify-center md:w-12 w-8 md:h-12 h-8 rounded-full border border-[#E9E9E9] bg-white text-black hover:bg-black hover:text-white hover:scale-95 transition-all duration-200 ease-linear shadow-[0_0px_q0px_0px_rgba(0,0,0,0.5)]'>
                        <FaXTwitter />
                    </Link>
                </li>
                <li>
                    <Link href="#" className='inline-flex items-center justify-center md:w-12 w-8 md:h-12 h-8 rounded-full border border-[#E9E9E9] bg-white text-black hover:bg-black hover:text-white hover:scale-95 transition-all duration-200 ease-linear shadow-[0_0px_q0px_0px_rgba(0,0,0,0.5)]'>
                        <FaShareAlt />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ShareButtons