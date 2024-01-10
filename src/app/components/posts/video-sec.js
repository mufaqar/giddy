'use client'
import React from 'react'
import Slider from 'react-slick';
import FeaturedPost from './featured-post';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const VideoSection = () => {
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
        <section className='py-16 bg-[#161C45] video_Slider'>
            <div className='container mx-auto px-4 relative'>
                <h2 className='text-[40px] leading-[45px] font-medium text-white mb-5'>
                    Featured Videos
                </h2>
                <div className=' mt-3 flex flex-col gap-3'>
                    <Slider ref={slider} {...settings}>
                        {Posts.map((item, idx) => {
                            return (
                                <FeaturedPost key={idx} data={item} custm_class="text-white" />
                            )
                        })}
                    </Slider>
                    <button className="absolute top-0 right-16 border rounded-full p-2 transform -translate-y-1/2 text-xl text-white " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                    <button className="absolute top-0 right-4 border rounded-full p-2 transform -translate-y-1/2 text-xl text-white " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
                </div>
            </div>
        </section>
    )
}

export default VideoSection

const Posts = [
    {
        id: 1,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Simply Irresistible: The Science of Attraction",
    },
    {
        id: 2,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Using Dating Apps to Discover Your Sexuality",
    },
    {
        id: 3,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Millions Are Watching Mukbang, but Is It a Harmful Influence?",
    },
    {
        id: 4,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Study Finds Racial Disparities in Ovarian Cancer Care",
    },
    {
        id: 5,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Prostate Cancer",
    },
    {
        id: 6,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Erectile Dysfunction",
    },
    {
        id: 7,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Pregnancy",
    },
    {
        id: 8,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Menopause",
    },
    {
        id: 9,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "STDs/STIs",
    },
    {
        id: 10,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Prostate Cancer",
    },
    {
        id: 11,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Erectile Dysfunction",
    },
    {
        id: 12,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Pregnancy",
    },
    {
        id: 13,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Menopause",
    },
    {
        id: 14,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "STDs/STIs",
    },
    {
        id: 15,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Prostate Cancer",
    },
    {
        id: 16,
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Erectile Dysfunction",
    },
]