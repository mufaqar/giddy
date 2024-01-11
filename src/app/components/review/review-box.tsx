import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const ReviewBpx = () => {
    return (
        <div className='flex md:flex-row flex-row gap-3 items-center'>
            <div>
                <Image src="/images/drkyle.png" alt='drkyle' width={95} height={95} />
            </div>
            <div>
                <h3 className='md:text-xl text-lg font-medium text-black'>
                    Chris Kyle, M.D.
                </h3>
                <p className='text-base font-normal text-[#686F77]'>
                    Chris Kyle has an M.D. and MPH (master of public health) from ...
                </p>
                <ul className='flex gap-3 items-center mt-3'>
                    <li>
                        <Link href="#" className={`inline-flex justify-center text-xl items-center text-[#686F77]`}>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={`inline-flex justify-center text-xl items-center text-[#686F77]`}>
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={`inline-flex justify-center text-xl items-center text-[#686F77]`}>
                            <FaInstagram />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ReviewBpx