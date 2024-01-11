import React from 'react'

const PollBox = ({ data }: any) => {
    return (
        <div className='px-2'>
            <h3 className='lg:text-xl text-base font-medium text-black mb-3'>
                {data?.question}
            </h3>
            <ul className='flex flex-col gap-4'>

                    <li>
                        <button className={`bg-[#F8F8F8] py-3 hover:bg-blue-500 hover:text-white px-4 rounded-lg w-full text-base font-medium text-black text-start`}>
                            Yes
                        </button>
                    </li>
                    <li>
                        <button className={`bg-[#F8F8F8] py-3 hover:bg-blue-500 hover:text-white px-4 rounded-lg w-full text-base font-medium text-black text-start`}>
                            No
                        </button>
                    </li>
            </ul>
               
        </div>
    )
}

export default PollBox