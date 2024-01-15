'use client'

import React, { FC } from 'react'
import SearchInput from '../serach/SearchInput'
import AdvanceSearch from '../serach/AdvanceSearch'
import { IoPlayCircleOutline } from "react-icons/io5";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { replaceAndCap } from '@/utils';

interface IHero {
     title: string
     info?: string
     bg: string
     tourVideo?: boolean,
     topic?: any
}

const Hero: FC<IHero> = ({
     title,
     info,
     bg,
     tourVideo,
     topic
}) => {
     const params = useParams<any>()
     console.log("🚀 ~ params:", params)

     return (
          <main className={`${bg} text-white -mt-16 `}>
               <div className='max-w-[870px] mx-auto px-2 md:px-0 py-20 pt-28 relative'>
                    <div>
                         
                         {
                              params?.topic.length > 1 && 
                              <ul className='flex items-center justify-center gap-2 mb-5'>
                                  <li className='bg-white/60 p-2 px-4 rounded-full text-gray-500 hover:scale-105 transition-all duration-200 ease-linear'><Link href={`/${params.topic[0]}`}>{replaceAndCap(params.topic[0])}</Link></li>
                                  <li className="text-3xl">/</li>
                                  <li className='bg-white/60 p-2 px-4 rounded-full text-blue-600 transition-all duration-200 ease-linear'>{replaceAndCap(params.topic[0])}</li>
                              </ul>
                         }
                         <h1 className='text-3xl font-semibold text-center md:text-5xl'>{title}</h1>
                         {info && <p className='text-center my-4'>{info}</p>}
                         {topic?.length > 0 && <ul className='flex justify-center gap-2 mt-5'>
                              {
                                   topic?.map((item: any, idx: number) => (
                                        <li key={idx} className='bg-white/60 p-2 px-4 rounded-full text-black hover:scale-105 transition-all duration-200 ease-linear'><Link href={`${params.topic[0]}/${item.slug.current}`}>{item.name}</Link></li>
                                   ))
                              }
                         </ul>}
                    </div>
                    <div className='md:px-20 mt-8'>
                         <SearchInput />
                         <AdvanceSearch />
                         {
                              tourVideo && <div className="flex justify-end mt-5 xl:mt-0">
                                   <button className='flex xl:absolute bottom-16 -right-44 2xl:-right-60 items-center gap-2 bg-[#307FE2] hover:bg-[#3080e2d7] p-3 px-6 rounded-full'>
                                        How it works
                                        <IoPlayCircleOutline className="text-4xl" />
                                   </button>
                              </div>
                         }
                    </div>
               </div>

          </main>
     )
}

export default Hero