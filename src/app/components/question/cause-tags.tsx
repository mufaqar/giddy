"use client"

import React, { useState } from 'react'
import { FaArrowRightLong, FaRegBookmark } from 'react-icons/fa6'
import { PortableText } from '@portabletext/react'

const CauseTags = ({ data }: any) => {
    const [open, setOpen] = useState<any>(false);

    const handleOpenReadMore = () => {
        if (open) {
            setOpen(false)
        }
        setOpen(true)
    }


    return (
        <div className='bg-white p-6 rounded-lg border border-[#C6C6C6] cause_tags'>
            <h3 className='md:text-[32px] md:leading-[32px] font-medium text-black mb-8 flex justify-between gap-7'>
                {data.name} <FaRegBookmark className="text-[#307FE2]" />
            </h3>
            <ul className='flex flex-wrap gap-1 w-full'>
                {data?.tags?.map((item: any, idx: any) => {
                    return (<li key={idx}
                        className={`border border-[#C6C6C6] font-normal text-base text-black py-2 rounded-[20px] px-4 min-w-fit max-w-fit cursor-pointer`}>
                        {item?.tag}
                    </li>
                    )
                })}
            </ul>
            <div className='mt-8'>
                <div className="content">
                    <PortableText
                        value={data?.content}
                    />
                    {
                        open && <PortableText
                            value={data?.readmore}
                        />
                    }

                </div>
                <div>
                    {
                        !open && <button onClick={handleOpenReadMore} className='text-base font-normal text-black py-3 px-4 border border-[#C8C8C8] bg-transparent hover:text-white hover:bg-black hover:scale-95 transition-all duration-200 ease-linear rounded-full max-w-[225px] w-full mx-auto flex justify-between items-center mt-8'>
                            Read more <FaArrowRightLong className="text-2xl font-normal" />
                        </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default CauseTags
