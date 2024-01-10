'use client'
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Trendingposts = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 5,
        slidesPerRow: 1,
        arrows: false,
    };
    const slider = React.useRef(null);
    return (
        <div className='bg-white rounded-lg p-5 shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] relative h-full'>
            <h2 className='text-xl font-medium text-black flex gap-1.5 items-center'>
                <FaArrowTrendUp className="text-[#F8485E]" /> Trending Topics
            </h2>
            <ul className='mt-3 flex flex-col gap-3 h-[75%]'>
                <Slider ref={slider} {...settings} className='h-full'>
                    {Topics.map((item, idx) => {
                        return (
                            <li key={idx} className='text-base font-medium text-black py-1'>
                                {item?.id}. {item?.title}
                            </li>
                        )
                    })}
                </Slider>
            </ul>
            <button className="absolute top-8 right-14 border rounded-full p-1 transform -translate-y-1/2 text-base text-black " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                <button className="absolute top-8 right-4 border rounded-full p-1 transform -translate-y-1/2 text-base text-black " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
        </div>
    )
}

export default Trendingposts

const Topics = [
    {
        id: 1,
        title: "Erectile Dysfunction",
    },
    {
        id: 2,
        title: "Pregnancy",
    },
    {
        id: 3,
        title: "Menopause",
    },
    {
        id: 4,
        title: "STDs/STIs",
    },
    {
        id: 5,
        title: "Prostate Cancer",
    },
    {
        id: 6,
        title: "Erectile Dysfunction",
    },
    {
        id: 7,
        title: "Pregnancy",
    },
    {
        id: 8,
        title: "Menopause",
    },
    {
        id: 9,
        title: "STDs/STIs",
    },
    {
        id: 10,
        title: "Prostate Cancer",
    },
    {
        id: 11,
        title: "Erectile Dysfunction",
    },
    {
        id: 12,
        title: "Pregnancy",
    },
    {
        id: 13,
        title: "Menopause",
    },
    {
        id: 14,
        title: "STDs/STIs",
    },
    {
        id: 15,
        title: "Prostate Cancer",
    },
]