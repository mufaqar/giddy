import React from 'react'

const PollBox = ({ data }: any) => {
    return (
        <div className='px-2'>
            <h3 className='lg:text-xl text-base font-medium text-black mb-3'>
                {data?.que}
            </h3>
            {data?.options.map((_item: any, _idx: any) => {
                return (<ul key={_idx} className='flex flex-col gap-4'>

                    <li>
                        <button className={`bg-[#F8F8F8] py-3 px-4 rounded-lg w-full text-base font-medium text-black text-start`}>
                            {_item?.yes}
                        </button>
                    </li>
                    <li>
                        <button className={`bg-[#F8F8F8] py-3 px-4 rounded-lg w-full text-base font-medium text-black text-start`}>
                            {_item?.no}
                        </button>
                    </li>
                </ul>
                )
            })}
        </div>
    )
}

export default PollBox