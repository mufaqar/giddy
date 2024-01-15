import Link from 'next/link'
import React from 'react'
import { GrSearch } from 'react-icons/gr'

const PeopleAsk = ({data}:any) => {
    
    return (
        <div>
            <h2 className='md:text-[32px] md:leading-[41px] text-2xl font-medium text-black'>
                People also ask
            </h2>
            <div className='flex flex-col gap-5 mt-5'>
                {data?.map((item: any, idx: any) => {
                    return (<div key={idx} className='py-[12px] px-5 bg-white rounded-2xl rounded-br-none border border-[#C8C8C8] flex gap-5 items-center'>
                        <GrSearch className="text-[#307FE2] cursor-pointer hover:scale-105 text-xl" />
                        <Link href={`/article/${item.slug.current}`} className='text-base cursor-pointer font-normal text-black'>
                            {item.title}
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PeopleAsk