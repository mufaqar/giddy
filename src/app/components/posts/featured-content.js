'use client'
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';

const FeaturedContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 1,
        slidesPerRow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                }
            }
        ]
    };
    const slider = React.useRef(null);
    return (
        <div className='bg-white rounded-lg py-5 px-3 pb-12 shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] relative h-full'>
            <h2 className='text-xl font-medium text-black'>
                Featured Content
            </h2>
            <div className='mt-3 flex flex-col gap-3'>
                <Slider ref={slider} {...settings}>
                    {Posts.map((item, idx) => {
                        return (
                            <div key={idx} className='px-2'>
                                <Image src={item?.img} width={224} height={140} className='w-full' />
                                <Link href={item?.link} className='text-base font-medium text-black mt-2'>
                                    {item?.title}
                                </Link>
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

export default FeaturedContent

const Posts = [
    {
        id: 1,
        link: "#",
        img: "/images/post/1.png",
        title: "Simply Irresistible: The Science of Attraction",
    },
    {
        id: 2,
        link: "#",
        img: "/images/post/2.png",
        title: "Using Dating Apps to Discover Your Sexuality",
    },
    {
        id: 3,
        link: "#",
        img: "/images/post/3.png",
        title: "Millions Are Watching Mukbang, but Is It a Harmful Influence?",
    },
    {
        id: 4,
        link: "#",
        img: "/images/post/4.png",
        title: "Study Finds Racial Disparities in Ovarian Cancer Care",
    },
    {
        id: 5,
        link: "#",
        img: "/images/post/1.png",
        title: "Prostate Cancer",
    },
    {
        id: 6,
        link: "#",
        img: "/images/post/2.png",
        title: "Erectile Dysfunction",
    },
    {
        id: 7,
        link: "#",
        img: "/images/post/3.png",
        title: "Pregnancy",
    },
    {
        id: 8,
        link: "#",
        img: "/images/post/4.png",
        title: "Menopause",
    },
    {
        id: 9,
        link: "#",
        img: "/images/post/1.png",
        title: "STDs/STIs",
    },
    {
        id: 10,
        link: "#",
        img: "/images/post/2.png",
        title: "Prostate Cancer",
    },
    {
        id: 11,
        link: "#",
        img: "/images/post/3.png",
        title: "Erectile Dysfunction",
    },
    {
        id: 12,
        link: "#",
        img: "/images/post/4.png",
        title: "Pregnancy",
    },
    {
        id: 13,
        link: "#",
        img: "/images/post/1.png",
        title: "Menopause",
    },
    {
        id: 14,
        link: "#",
        img: "/images/post/2.png",
        title: "STDs/STIs",
    },
    {
        id: 15,
        link: "#",
        img: "/images/post/3.png",
        title: "Prostate Cancer",
    },
    {
        id: 16,
        link: "#",
        img: "/images/post/4.png",
        title: "Erectile Dysfunction",
    },
]