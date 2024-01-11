'use client'
import React from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import FeaturedPost from '../posts/featured-post';
import Latest_Post from '../posts/latest-post';

const Causes = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        slidesPerRow: 1,
        arrows: false,

    };
    const slider = React.useRef(null);
    return (
        <div className=''>
            <h2 className='text-xl font-medium text-[#307FE2] flex gap-1.5 items-center'>
                <div className='bg-[#307FE2] w-1.5 h-3.5 rounded-sm'></div>Causes
            </h2>
            <div className='mt-3 flex flex-col gap-7'>
                <Slider ref={slider} {...settings}>
                    {Posts.map((item, idx) => {
                        return (
                            <div key={idx} className='p-3 w-full'>
                                <Latest_Post data={item} custm_class="text-black" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <button className="absolute top-8 right-14 border rounded-full p-1 transform -translate-y-1/2 text-base text-black " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
            <button className="absolute top-8 right-4 border rounded-full p-1 transform -translate-y-1/2 text-base text-black " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
        </div>
    )
}

export default Causes

const Posts = [
    {
        id: 1,
        link: "#",
        img: "/images/post/1.png",
        title: "Does Vaping Cause Erectile Dysfunction?",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 2,
        link: "#",
        img: "/images/post/2.png",
        title: "Quick & Dirty Celebrity Sexual Health News: Episode #001",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 3,
        link: "#",
        img: "/images/post/3.png",
        title: "Jessica Hall on sex positivity, a miscarriage and breastfeeding",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 4,
        link: "#",
        img: "/images/post/4.png",
        title: "Study Finds Racial Disparities in Ovarian Cancer Care",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 5,
        link: "#",
        img: "/images/post/1.png",
        title: "Prostate Cancer",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 6,
        link: "#",
        img: "/images/post/2.png",
        title: "Erectile Dysfunction",
       excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 7,
        link: "#",
        img: "/images/post/3.png",
        title: "Pregnancy",
       excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 8,
        link: "#",
        img: "/images/post/4.png",
        title: "Menopause",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
    {
        id: 9,
        link: "#",
        img: "/images/post/1.png",
        title: "STDs/STIs",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
    },
]