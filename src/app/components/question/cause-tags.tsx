"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowRightLong, FaRegBookmark } from 'react-icons/fa6'
import { PortableText } from '@portabletext/react'

const CauseTags = ({ data }: any) => {
    const [open, setOpen] = useState<any>(false);
    const [tag, setTag] = useState<any>()

    const handleOpenReadMore = () => {
        if (open) {
            setOpen(false)
        }
        setOpen(true)
    }
    useEffect(()=>{
        setTag(data?.content[0]?.Title)
    },[data?.content])

    return (
        <div className='bg-white p-6 rounded-lg border border-[#C6C6C6] cause_tags'>
            <h3 className='md:text-[32px] md:leading-[32px] font-medium text-black mb-8 flex justify-between gap-7'>
                {data?.name} <FaRegBookmark className="text-[#307FE2]" />
            </h3>
            <ul className='flex flex-wrap gap-1 w-full'>
                {data?.content?.map((item: any, idx: any) => {
                    return (<li key={idx}
                        onClick={() => setTag(item?.Title)}
                        className={`${tag === item?.Title ? 'border-blue-500 text-black' : 'border-[#C6C6C6] text-gray-600'} border hover:border-blue-500 hover:text-black font-normal text-base  py-2 rounded-[20px] px-4 min-w-fit max-w-fit cursor-pointer`}>
                        {item?.Title}
                    </li>
                    )
                })}
            </ul>
            <div className='mt-8'>
                
                    {data?.content?.map((item: any, idx: any) => (
                        <div className={`content ${item.Title === tag ? 'block' : 'hidden'}`} key={idx}>
                            <PortableText
                                value={item?.excerpt}
                            />
                            {
                                open && <PortableText
                                    value={item?.readmore}
                                />
                            }
                        </div>
                    ))}
                
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
