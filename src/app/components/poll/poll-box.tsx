'use state'
import React, { useState } from 'react'
import { client } from '../../../../sanity/lib/client'

const PollBox = ({ data }: any) => {
    const [selectPoll, setSelectPoll] = useState(false)

    const handlePoll = (_id: string, yes: number) => {
        console.log("🚀 ~ handlePoll ~ yes:", yes)
        client
            .patch(_id) // Document ID to patch
            .inc({ yes: 1 }) // Increment field by count
            .commit() // Perform the patch and return a promise
            .then((res) => {
                console.log('Hurray, the bike is updated! New document:')
                console.log(res)
            })
            .catch((err) => {
                console.error('Oh no, the update failed: ', err.message)
            })
    }

    return (
        <div className='px-2'>
            <h3 className='lg:text-xl text-base font-medium text-black mb-3'>
                {data?.question}
            </h3>
            <ul className='flex flex-col gap-4'>

                <li>
                    <button onClick={() => handlePoll(data?._id, data?.yes + 1)} className={`bg-[#F8F8F8] py-3 flex justify-between items-center hover:bg-blue-500 hover:text-white px-4 rounded-lg w-full text-base font-medium text-black text-start`}>
                        Yes
                        <span>{data?.yes}</span>
                    </button>
                </li>
                <li>
                    <button className={`bg-[#F8F8F8] py-3 hover:bg-blue-500 hover:text-white px-4 flex justify-between items-center rounded-lg w-full text-base font-medium text-black text-start`}>
                        No
                        <span>{data?.no}</span>
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default PollBox