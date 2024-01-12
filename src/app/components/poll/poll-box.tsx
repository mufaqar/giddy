'use state'
import React, { useEffect, useState } from 'react'
import { client } from '../../../../sanity/lib/client'
import { dataset, projectId } from '../../../../sanity/env'

const PollBox = ({ data }: any) => {
    // console.log("🚀 ~ PollBox ~ data:", data)
    const [selectPoll, setSelectPoll] = useState<any>()
    console.log("🚀 ~ PollBox ~ selectPoll:", selectPoll)
    const [polls, setPolls] = useState(data)
    const [loading, setLoading] = useState(false)

    const handlePoll = async (_id: string, yes: number, no:number) => {
        setLoading(true)
        const mutations = [{
            createOrReplace: {
              _id: _id,
              _type: 'polls',
              yes,
              no,
              question : data.question
            }
          }]
          
          fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`, {
            method: 'post',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`
            },
            body: JSON.stringify({mutations})
          })
            .then(response => response.json())
            .then(result => {
                const pid:any = localStorage.getItem('pollID')
                var ids:any = JSON.parse(pid) || []
                ids.push(_id)
                localStorage.setItem('pollID', JSON.stringify(ids))
                setSelectPoll(pid)
            })
            .catch(error => console.error(error))
    }


    useEffect(() => {
        const getpid: any = localStorage.getItem('pollID');
        const pid = JSON.parse(getpid);    
        // Check if the new value of pid is different from the current selectPoll
        if (pid !== selectPoll) {
            setSelectPoll(pid);
        }  
    }, []);


    const pState = selectPoll?.includes(polls?._id) || loading
    console.log("🚀 ~ PollBox ~ pState:", pState)

    return (
        <div className='px-2'>
            <h3 className='lg:text-xl text-base font-medium text-black mb-3'>
                {polls?.question}
            </h3>
            <ul className='flex flex-col gap-4'>
            
                <li>
                    <button onClick={() => handlePoll(polls?._id, polls?.yes+1, polls.no)} 
                        className={`bg-[#F8F8F8] py-3 flex justify-between items-center px-4 rounded-lg w-full text-base font-medium text-black text-start ${ pState ? '' : 'hover:bg-blue-500 hover:text-white'}`}
                        disabled={pState ? true : false}
                    >
                        <span className={`${pState && 'opacity-10'}`}>Yes</span>
                        {
                           pState && <span>{polls?.yes}</span>
                        }
                    </button>
                </li>
                <li>
                    <button onClick={() => handlePoll(polls?._id, polls?.yes, polls?.no+1)} 
                    className={`bg-[#F8F8F8] py-3 px-4 flex justify-between items-center rounded-lg w-full text-base font-medium text-black text-start ${pState ? '' : 'hover:bg-blue-500 hover:text-white'}`}
                    disabled={pState ? true : false}
                    >
                        <span className={`${pState && 'opacity-10'}`}>No</span>
                        {
                            pState && <span>{polls?.no}</span>
                        }
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default PollBox