import React from 'react'
import Navbar from '../components/header/navbar'
import Hero from '../components/hero/hero'
import CauseTags from '../components/question/cause-tags'
import PeopleAsk from '../components/question/people-ask'
import Joinform from '../components/serach/joinform'
import Causes from '../components/question/causes'
import FeatureArticle from '../components/question/feature-article'
import VideoSection from '../components/posts/video-sec'
import LatestPost_sec from '../components/posts/latest-post-sec'

export default function Subtopic() {
    return (
        <>
            <Navbar
                color='#000'
            />
            <section className='[&>*]:text-black'>
                <Hero title={'Psychological Causes'} bg={'bg-gradient-radial from-white/20 via-[#D3E2FF] to-[#D3E2FF]'} />
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-10 gap-7'>
                    <div className='md:w-1/2 w-full'>
                        <CauseTags />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div className='mb-10'>
                            <PeopleAsk />
                        </div>
                        <Joinform />
                    </div>
                </div>
            </section>
            <section className='py-16 bg-zinc-50'>
                <div className='container mx-auto px-4 relative'>
                    <h2 className='md:text-[40px] leading-[45px] font-medium text-black mb-8'>
                        Featured Articles: Erectile Dysfunction
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-7 '>
                        <div className=''>
                            {Posts.slice(0, 1).map((item, idx) => {
                                return (
                                    <FeatureArticle key={idx} data={item} />
                                )
                            })}
                        </div>
                        <div className='md:col-span-2'>
                            <Causes />
                        </div>
                    </div>
                </div>
            </section>
            <VideoSection />
            <LatestPost_sec />
        </>
    )
}

const Posts = [
    {
        cate: "Dating & Relationships",
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Aydian Dowling on sexual health and intimacy as a transgender man",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
        comments: "2",
    },
    {
        cate: "Future Sex",
        link: "#",
        img: "/images/feature/1.png",
        title: "Our Sex Drive Drives Technological Innovation",
        comments: "9",
    },
    {
        cate: "HIV & AIDS",
        link: "#",
        img: "/images/feature/2.png",
        title: "Using Dating Apps to Discover Your Sexuality",
        comments: "9",
    },
    {
        cate: "Vaginal Health",
        link: "#",
        img: "/images/feature/4.png",
        title: "The Vulva Positivity Movement",
        comments: "9",
    },
]