import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({data}:any) => {
    return (
        <div>
            <ul className='flex flex-wrap space-x-1 md:space-y-0 space-y-3 items-center w-fit mx-auto'>
                <li>
                    <Link href="#" className={`text-base font-normal text-[#868686] bg-[#EEEEEE] py-2 px-4 rounded-full`}>
                        Article
                    </Link>
                </li>
                <li className='text-[#868686] text-3xl'>/</li>
                <li>
                    <Link href="#" className={`text-base font-normal text-[#868686] bg-[#EEEEEE] py-2 px-4 rounded-full`}>
                        {data?.topic?.name}
                    </Link>
                </li>
                {/* <li className='text-[#868686] text-3xl'>/</li>
                <li>
                    <span className={`text-base font-medium text-[#307FE2] bg-white py-2 px-4 rounded-full`}>
                        {data?.topic?.subtopics[0].name}
                    </span>
                </li> */}
            </ul>
        </div>
    )
}

export default Breadcrumb