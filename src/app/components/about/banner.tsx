import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='-mt-16 pt-28 pb-16 bg-gradient-radial from-[#444F74] via-[#13183C] to-[#13183C]'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-medium text-white'>
                        About Us,<br />
                        About Our Brands
                    </h1>
                    <ul className='flex gap-3 justify-between items-center max-w-[350px] md:mt-20 mt-10'>
                        <li>
                            <Image src="/images/eddi.png" alt='eddi' width={78} height={38} />
                        </li>
                        <li>
                            <Image src="/images/gidyh.png" alt='gidyh' width={78} height={38} />
                        </li>
                        <li>
                            <Image src="/images/giddy.png" alt='giddy' width={89} height={35} />
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='md:text-2xl text-xl font-medium text-white'>
                        Our Values
                    </h3>
                    <p className='text-lg font-medium text-white mt-3'>
                        At Giddy, we want to remove the stigma surrounding talking about sensitive health topics. Sexual wellness is essential to everyone, and our aim is to always keep our readers well-informed on the subject. We want every person to have the knowledge they need to live their healthiest life, both in and out of the bedroom.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner