import React from 'react'
import { GrSearch } from 'react-icons/gr'

const PeopleAsk = () => {
    return (
        <div>
            <h2 className='md:text-[32px] md:leading-[41px] text-2xl font-medium text-black'>
                People also ask
            </h2>
            <div className='flex flex-col gap-5 mt-5'>
                {[0, 1, 2].map((item: any, idx: Number) => {
                    return (<div className='py-[12px] px-5 bg-white rounded-2xl rounded-br-none border border-[#C8C8C8] flex gap-5 items-center'>
                        <GrSearch className="text-[#307FE2] cursor-pointer hover:scale-105 text-xl" />
                        <p className='text-base font-normal text-black'>
                            What are the common causes of erectile dysfunction?
                        </p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PeopleAsk