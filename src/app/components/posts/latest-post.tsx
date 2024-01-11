'use client'
import { IArticle } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { FaMessage, FaRegBookmark } from 'react-icons/fa6'

interface IPostProps {
    data: IArticle | any,
    custm_class?: string
}

const Latest_Post: FC<IPostProps> = ({ data, custm_class }) => {

    return (

        <div className={`flex md:flex-row items-center flex-col gap-7`}>

            {/* <div className="md:w-[35%] w-full rounded-lg">
                    <iframe src={`http://www.youtube.com/watch?v=${data?.videoURL}`}
                        className='w-full h-full rounded-lg' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}

            <div className='md:min-w-[280px] w-full md:w-auto overflow-hidden lg:h-[200px] rounded-xl relative'>
                <Link href={data?.slug?.current}>
                    <Image src={data?.image.asset.url} alt={data?.title} width={280} height={176} className='w-full object-cover h-full' />
                </Link>
                <div className="bg-black/20 absolute inset-0 overflow-hidden rounded-lg" />
                {
                    data?.videoURL && <BsPlayCircle className="absolute transform translate-y-1/2 translate-x-1/2 bottom-1/2 right-1/2 text-4xl hover:scale-110 text-white cursor-pointer" />
                }
            </div>

            <div className='md:w-[75%] w-full'>
                {data?.topic && <Link href={data?.topic[0]?.slug?.current || `#`} className={`md:text-lg text-base font-medium text-[#3185FC] block w-fit ${custm_class}`}>
                    {data?.topic[0]?.name}
                </Link>}
                <Link href={data?.slug?.current} className={`md:text-2xl text-xl font-medium text-black mt-2 block w-fit ${custm_class}`}>
                    {data?.title}
                </Link>
                {data?.excerpt && <p className='md:text-xl text-base font-normal text-black mt-3'>
                    {data?.excerpt}
                </p>}
                <ul className='flex gap-2 items-center mt-3'>
                    {data?.writtenby ? (<li>
                        <span className='text-base font-medium text-[#868686]'>
                            {data?.writtenby.name}
                        </span>
                    </li>) : (
                        <li>
                            <span className='text-base font-medium text-[#868686]'>
                                4 min
                            </span>
                        </li>
                    )}
                    <li className='text-base font-medium text-[#868686]'>.</li>
                    <li>
                        <span className='flex gap-1 items-center text-xs font-medium text-[#868686]'>
                            <FaMessage /> 2
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