import React from 'react'
import FaqBox from './faq-box';
import Link from 'next/link';
import { FaMessage, FaRegBookmark } from 'react-icons/fa6';

const Banner = () => {
  return (
    <section className='-mt-16 pt-28 pb-16 bg-gradient-radial from-white via-[#D3E2FF] to-[#D3E2FF]'>
      <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7'>
        <div className='flex flex-col gap-7 md:order-1 order-2'>
          {faqs_Data?.map((item: any, idx: Number) => {
            return (
              <FaqBox key={idx} idx={idx} data={item} />
            )
          })}
        </div>
        <div className='md:order-2 order-1'>
          <div className='px-2'>
            <div className="aspect-video">
              <iframe src={`http://www.youtube.com/watch?v=yAoLSRbwxL8`}
                className='w-full h-full rounded-lg' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Link href="#" className={`text-xl font-medium text-[#3185FC] mt-4 block w-fit`}>
              Erectile Dysfunction
            </Link>
            <Link href="#" className={`md:text-[27px] md:leading-[35px] text-2xl font-medium text-black mt-2 block w-fit`}>
              How do I tell my partner I have ED?
            </Link>
            <ul className='flex gap-2 items-center mt-3'>
              <li>
                <span className='text-lg font-medium text-[#868686]'>
                  4 min
                </span>
              </li>
              <li className='text-base font-medium text-[#868686]'>.</li>
              <li>
                <span className='flex gap-1 items-center text-sm font-medium text-[#868686]'>
                  <FaMessage /> 2
                </span>
              </li>
              <li className='text-base font-medium text-[#868686]'>.</li>
              <li>
                <button className="text-sm font-medium text-[#307FE2]">
                  <FaRegBookmark />
                </button>
              </li>
            </ul>
          </div>
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