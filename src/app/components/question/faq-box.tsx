"use client"
import { PortableText } from '@portabletext/react'
import React, { useState } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa'
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md'

const FaqBox = ({ question, answer }: any) => {
    
    return (
        <div className={`opacity-100`}>
            <h1 className='text-xl font-medium text-black py-[18px] px-6 bg-white rounded-2xl rounded-br-none shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] flex justify-between gap-7'>
                {question}
            </h1>
            <div className={`bg-white p-6 rounded-[32px] rounded-br-none shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] mt-7 `}>
                <div className='text-base font-normal text-black mb-5 content'>
                    <PortableText
                        value={answer}
                    />
                </div>

                <ul className='flex flex-wrap items-center justify-end gap-3 mt-3'>
                    <li>
                        <span className='text-lg font-medium text-[#686F77]'>
                            Was this helpful?
                        </span>
                    </li>
                    <li>
                        <button className="text-2xl text-[#307FE2]">
                            <MdOutlineThumbUp />
                        </button>
                    </li>
                    <li>
                        <button className="text-2xl text-[#307FE2]">
                            <MdOutlineThumbDown />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FaqBox