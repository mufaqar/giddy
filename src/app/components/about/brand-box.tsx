import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const BrandBox = ({ bg, color, img, title, subtitle, content }: any) => {
    return (
        <div className='container mx-auto px-4  py-8 md:px-0'>
            <div className={`w-full md:px-10 px-5 py-16 rounded-[20px] bg-center bg-cover bg-no-repeat ${bg} ${color}`}>
                <div className='md:w-1/2 w-full'>
                    <Image src={img} alt='brand' width={313} height={56} className='w-auto' />
                    <h2 className='md:text-[40px] md:leading-[52px] text-3xl font-medium text-white mt-8'>
                        {title}
                    </h2>
                    <p className='md:text-2xl text-xl font-medium text-white my-4'>
                      {subtitle}
                    </p>
                    <p className='md:text-lg text-base font-normal text-white'>
                       {content}
                    </p>
                    <ul className='flex gap-3 items-center mt-10'>
                        <li>
                            <Link href="#" className={`inline-flex w-[30px] h-[30px] bg-white rounded-full justify-center items-center hover:bg-white/50 ${color}`}>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`inline-flex w-[30px] h-[30px] bg-white rounded-full justify-center items-center hover:bg-white/50 ${color}`}>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`inline-flex w-[30px] h-[30px] bg-white rounded-full justify-center items-center hover:bg-white/50 ${color}`}>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`inline-flex w-[30px] h-[30px] bg-white rounded-full justify-center items-center hover:bg-white/50 ${color}`}>
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BrandBox