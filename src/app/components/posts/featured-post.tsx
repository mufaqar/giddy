import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaMessage, FaRegBookmark } from "react-icons/fa6";

const FeaturedPost = ({ data, custm_class }: any) => {

    return (
        <div className='px-2'>
            {data?.video ?
                (<div className="aspect-video">
                    <iframe src={`http://www.youtube.com/watch?v=${data?.video}`}
                        className='w-full h-full rounded-lg' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>)
                :
                (<div className='rounded-lg'>
                    <Image src={data?.img} alt="feature" width={224} height={140} className='w-full' />
                </div>)
            }
            <Link href="#" className={`text-base font-medium mt-4 block ${custm_class}`}>
                {data?.title}
            </Link>
            {data?.video && <ul className='flex gap-2 items-center mt-3'>
                <li>
                    <span className='text-base font-medium text-[#C6C6C6]'>
                        4 min
                    </span>
                </li>
                <li className='text-base font-medium text-[#C6C6C6]'>.</li>
                <li>
                    <span className='flex gap-1 items-center text-xs font-medium text-[#C6C6C6]'>
                        <FaMessage /> 2
                    </span>
                </li>
                <li className='text-base font-medium text-[#C6C6C6]'>.</li>
                <li>
                    <button className="text-sm font-medium text-[#307FE2]">
                        <FaRegBookmark />
                    </button>
                </li>
            </ul>
            }
        </div>
    )
}

export default FeaturedPost