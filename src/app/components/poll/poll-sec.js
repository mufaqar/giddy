'use client'
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PollBox from './poll-box';

const Poll_Section = ({polls}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const slider = React.useRef(null);
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div className='bg-white rounded-lg p-5 pb-8 shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] relative h-full'>
                    <h2 className='text-xl font-medium text-black flex gap-1.5 items-center'>
                        <FaArrowTrendUp className="text-[#F8485E]" /> Polls
                    </h2>
                    <div className='mt-3 flex flex-col gap-3'>
                        <Slider ref={slider} {...settings} className='h-full'>
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

const Poll_Data = [
    {
       que: "Have you ever had an STD?",
       options: [
        {
            yes: "Yes",
            no: "No",
        },
       ]
    },
    {
       que: "Would you have a threesome?",
       options: [
        {
            yes: "Yes",
            no: "No",
        },
       ]
    },
    {
       que: "Does size matter?",
       options: [
        {
            yes: "Yes",
            no: "No",
        },
       ]
    },
    {
       que: "Have you experimented with toys?",
       options: [
        {
            yes: "Yes",
            no: "No",
        },
       ]
    },
    {
        que: "Have you ever had an STD?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Would you have a threesome?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Does size matter?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Have you experimented with toys?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Have you ever had an STD?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Would you have a threesome?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Does size matter?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
     {
        que: "Have you experimented with toys?",
        options: [
         {
             yes: "Yes",
             no: "No",
         },
        ]
     },
]