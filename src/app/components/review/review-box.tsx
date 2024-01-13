import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const ReviewBpx = ({data}:any) => {
    return (
        <div className='flex md:flex-row flex-row gap-3 items-center'>
            <div>
                <Image src={data.image?.asset.url} alt='drkyle' width={95} height={95} />
            </div>
            <div>
                <h3 className='md:text-xl text-lg font-medium text-black'>
                   {data.name}
                </h3>
                <p className='text-base font-normal text-[#686F77]'>
                    {data.review}
                </p>
                <ul className='flex gap-3 items-center mt-3'>
                    <li>
                        <Link target="_blank" href={data.twitter_link} className={`inline-flex justify-center text-xl items-center text-[#686F77]`}>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href={data.linkedin_link} className={`inline-flex justify-center text-xl items-center text-[#686F77]`}>
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href={data.insta_link} className={`inline-flex justify-center text-xl items-center text-[#686F77]`}>
                            <FaInstagram />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ReviewBpx