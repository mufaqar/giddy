'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { client } from '../../../../sanity/lib/client';
import { QQuestion, QTopics } from '../../../../sanity/lib/queries';
import Link from 'next/link';


const SearchInput = () => {

  const [openSearchFilter, setOpenSearchFilter] = useState(false)
  const [topics, setTopics] = useState<any>()
  const [question, setQuestion] = useState<any>()
  const [searchQuery, setSearchQuery] = useState<any>()

  useEffect(() => {
    (async () => {
      const topics = await client.fetch(QTopics);
      const question = await client.fetch(QQuestion);
      setTopics(topics)
      setQuestion(question)
    })()
  }, [openSearchFilter])

  const handleInputChange = useCallback(async (e: any) => {
    setSearchQuery(e.target.value)
    const topics = await client.fetch(QTopics);
    const question = await client.fetch(QQuestion);
    // filter topic 
    const filterTopics = topics.filter((item: any) =>
      item.name.toLowerCase().includes(e.target.value?.toLowerCase())
    );
    // filter question 
    const filterQuestion = question.filter((item: any) =>
      item.question.toLowerCase().includes(e.target.value?.toLowerCase())
    );
    setTopics(filterTopics)
    setQuestion(filterQuestion)
  }, []);



  return (
    <div className='bg-white flex h-auto items-center rounded-lg px-4 pr-2 relative'
      onFocus={() => setOpenSearchFilter(true)}
      onBlur={
        () => setOpenSearchFilter(false)
      }
    >
      <input type='text' placeholder='Ask a question' className='py-3 text-black bg-transparent outline-none ring-0 w-full pt-[16px]'

        value={searchQuery}
        onChange={(e) => handleInputChange(e)}
      />
      <GrSearch className={`cursor-pointer hover:scale-105 text-2xl h-9 w-12 p-2 transition-all duration-200 ease-linear rounded-md ${openSearchFilter ? 'bg-[#307FE2] text-white' : 'text-[#307FE2] bg-transparent'}`} />
      <div className={`${openSearchFilter ? 'bottom-auto py-4' : 'h-0 bottom-0'} px-4 transition-all duration-150 ease-linear bg-white overflow-hidden absolute w-full left-0  top-[46px] rounded-br-lg shadow-xl text-black rounded-bl-lg z-10`}>
        {/* popular topics */}
        <ul className='py-3'>
          <li className="text-sm text-gray-500 mb-2">Topular Topics</li>
          {
            topics?.length > 0 ?
              topics?.slice(0, 4).map((item: any, idx: number) => (
                <li key={idx} className="py-1 hover:text-blue-500" onClick={()=>setSearchQuery(item.name)}>
                  <Link href={'/' + item.slug?.current}>{item.name}</Link>
                </li>
              )) :
              <li className="py-1 hover:text-blue-500">
                No Topic Found..!
              </li>
          }
        </ul>
        <ul className='py-1'>
          <li className="text-sm text-gray-500 mb-2">Topular Questions</li>
          {
            question?.length > 0 ?
              question?.slice(0, 4).map((item: any, idx: number) => (
                <li key={idx} className="py-1 hover:text-blue-500">
                  <Link href={'/question/' + item.slug?.current}>{item.question}</Link>
                </li>
              )) :
              <li className="py-1 hover:text-blue-500">
                No Question Found..!
              </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchInput