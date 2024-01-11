'use client'
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PollBox from './poll-box';
import { sliderSettings } from '@/utils';

const Poll_Section = ({polls:any}) => {

    const slider = React.useRef(null);
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div className='bg-white rounded-lg p-5 pb-8 shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] relative h-full'>
                    <h2 className='text-xl font-medium text-black flex gap-1.5 items-center'>
                        <FaArrowTrendUp className="text-[#F8485E]" /> Polls
                    </h2>
                    <div className='mt-3 flex flex-col gap-3'>
                        <Slider ref={slider} {...sliderSettings} className='h-full'>
                            {polls?.map((item, idx) => {
                                return (
                                    <PollBox key={idx} data={item} />
                                )
                            })}
                        </Slider>
                    </div>
                    <button className="absolute top-8 right-14 border rounded-full p-1 transform -translate-y-1/2 text-base text-black " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                    <button className="absolute top-8 right-4 border rounded-full p-1 transform -translate-y-1/2 text-base text-black " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
                </div>
            </div>
        </section>
    )
}

export default Poll_Section
