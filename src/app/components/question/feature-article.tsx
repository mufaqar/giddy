import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMessage, FaRegBookmark } from 'react-icons/fa6'

const FeatureArticle = ({ data, custm_class }: any) => {
    return (
        <div>
            <div className='flex flex-col gap-7'>
                {data?.video ?
                    (<div className="w-full rounded-lg aspect-video">
                        <iframe src={`http://www.youtube.com/watch?v=${data?.video}`}
                            className='w-full h-full rounded-lg' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>)
                    :
                    (
                        <Link href={`/article/${data.slug.current}`}> 
                        <div className='w-full rounded-lg'>
                            <Image src={data?.image.asset.url} alt="feature" width={280} height={176} className='w-full' />
                        </div>
                        </Link>
                    )
                }
                <div className='w-full'>
                    {data?.cate && <Link href="#" className={`md:text-lg text-base font-medium text-[#3185FC] block w-fit ${custm_class}`}>
                        {data?.cate}
                    </Link>}
                    <Link href={`/article/${data.slug.current}`} className={`md:text-[32px] md:leading-[45px] text-xl font-medium text-black mt-2 block w-fit ${custm_class}`}>
                        {data?.title}
                    </Link>
                    {data?.excerpt && <p className='md:text-base text-base font-normal text-[#868686] mt-3'>
                        {data?.excerpt}
                    </p>}
                    <ul className='flex gap-2 items-center mt-3'>
                        {data?.author ? (<li>
                            <span className='text-base font-medium text-[#868686]'>
                                {data?.author}
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
                                <FaMessage /> {data?.comments} 2
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
        </div>
    )
}

export default FeatureArticle