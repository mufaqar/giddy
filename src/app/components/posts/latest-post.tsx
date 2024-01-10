import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMessage, FaRegBookmark } from 'react-icons/fa6'

const Latest_Post = ({ data, custm_class }: any) => {
    return (
        <div className='flex md:flex-row flex-col gap-7'>
            {data?.video ?
                (<div className="md:w-[35%] w-full rounded-lg">
                    <iframe src={`http://www.youtube.com/watch?v=${data?.video}`}
                        className='w-full h-full rounded-lg' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>)
                :
                (
                    <div className='md:w-[35%] w-full rounded-lg'>
                        <Image src={data?.img} alt="feature" width={280} height={176} className='w-full' />
                    </div>
                )
            }
            <div className='md:w-[75%] w-full'>
                <Link href="#" className={`text-lg font-medium text-[#3185FC] block w-fit ${custm_class}`}>
                    {data?.cate}
                </Link>
                <Link href="#" className={`text-2xl font-medium text-black mt-4 block w-fit ${custm_class}`}>
                    {data?.title}
                </Link>
                <p className='text-xl font-normal text-black'>
                    {data?.excerpt}
                </p>
                <ul className='flex gap-2 items-center mt-3'>
                    <li>
                        <span className='text-base font-medium text-[#868686]'>
                            {data?.author}
                        </span>
                    </li>
                    <li className='text-base font-medium text-[#868686]'>.</li>
                    <li>
                        <span className='flex gap-1 items-center text-xs font-medium text-[#868686]'>
                            <FaMessage /> {data?.comments}
                        </span>
                    </li>
                    <li className='text-base font-medium text-[#868686]'>.</li>
                    <li>
                        <button className="text-sm font-medium text-[#307FE2]">
                            <FaRegBookmark />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Latest_Post