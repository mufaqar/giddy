"use client"
import React, { useState } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa'
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md'

const FaqBox = ({ data }: any) => {
    const [open, setOpen] = useState<any>(data.id);

    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(null);
        }
        setOpen(id);
    };
    return (
        <div className={`${open !== data.id ? "opacity-60" : "opacity-100"}`}>
            <h1 onClick={() => handleFaq(data.id)} className='md:text-2xl text-lg font-medium text-black py-[18px] px-6 bg-white rounded-2xl rounded-br-none shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] flex justify-between gap-7'>
                How do I tell my partner I have ED?
                {open !== data.id && <FaChevronCircleUp className="text-[#307FE2]" />}
            </h1>
            <div className={`bg-white p-6 rounded-[32px] rounded-br-none shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] mt-7 ${open === data.id ? "block" : "hidden"}`}>
                <p className='text-base font-normal text-black mb-5'>
                    Choose a comfortable setting to have an open conversation with your partner about erectile dysfunction. Be honest about your feelings, emphasizing that it's a health issue and not a reflection of your relationship.
                </p>
                <p className='text-base font-normal text-black'>
                    Share your intentions to explore solutions together, whether through lifestyle changes or seeking medical advice. Encourage open communication and work collaboratively to navigate this aspect of your health as a team.
                </p>
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