'use client'
import React from 'react'
import Slider from 'react-slick';
import FeaturedPost from './featured-post';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { sliderSettings } from '@/utils';

const VideoSection = ({articles}) => {
    const slider = React.useRef(null);
    return (
        <section className='py-16 bg-[#161C45] video_Slider'>
            <div className='container mx-auto px-4 relative'>
                <h2 className='md:text-[40px] md:leading-[45px] text-3xl font-medium text-white mb-10'>
                    Featured Videos
                </h2>
                <div className=' mt-3 flex flex-col gap-3'>
                    <Slider ref={slider} {...sliderSettings}>
                        {articles?.map((item, idx) => {
                            return (
                                <FeaturedPost key={idx} data={item} custm_class="text-white" videoSection/>
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
