'use state'
import React from 'react'
import FaqBox from './faq-box';
import Link from 'next/link';
import { FaChevronCircleUp } from 'react-icons/fa';
import FeaturedPost from '../posts/featured-post';

const Banner = ({data}:any) => {

  return (
    <section className='-mt-16 pt-28 pb-16 bg-gradient-radial from-white via-[#D3E2FF] to-[#D3E2FF]'>
      <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7'>
        <div className='flex flex-col gap-7 md:order-1 order-2'>
          <FaqBox question={data?.question} answer={data?.answer} />
          <button className='text-xl font-medium text-gray-500 py-[18px] px-6 bg-white rounded-2xl rounded-br-none shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] flex justify-between gap-7'>
                <span className="text-left">Not exactly what you needed? Ask another question...</span>
                <FaChevronCircleUp className="text-[#307FE2] mt-1" />
            </button>
        </div>
        <div className='md:order-2 order-1'>
          <FeaturedPost data={data.article} custm_class="!font-bold !text-xl" videoSection topic/>
        </div>
      </div>
    </section>
  )
}

export default Banner

const faqs_Data = [
  {
    id: 1,
    que: "How do I tell my partner I have ED?",
  },
  {
    id: 2,
    que: "How do I tell my partner I have ED?",
  },
]