import React, { FC } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaMessage, FaRegBookmark } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";

interface IFeaturePostProps {
    data: any,
    custm_class?: string,
    videoSection?: boolean
}

const FeaturedPost: FC<IFeaturePostProps> = ({ data, custm_class, videoSection }) => {

    return (
        <div className='px-2'>
            {/* <div className="aspect-video">
                    <iframe src={`${data?.videoURL}`} className='w-full h-full rounded-lg' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}

            <div className='rounded-lg relative'>
                <Image src={data?.image?.asset?.url} alt="feature" width={224} height={140} className='w-full' />
                {
                    videoSection && data?.videoURL && <BsPlayCircle className="absolute bottom-3 right-3 text-3xl hover:scale-110 text-white cursor-pointer" />
                }

            </div>

            <Link href={'/article/' + data.slug?.current || `#`} className={`text-base font-medium mt-4 block ${custm_class}`}>
                {data?.title}
            </Link>
            {videoSection && <ul className='flex gap-2 items-center mt-3'>
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