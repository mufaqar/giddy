import React from 'react'
import Banner from '../components/question/banner'
import Navbar from '../components/header/navbar'
import CauseTags from '../components/question/cause-tags'
import Latest_Post from '../components/posts/latest-post'
import Joinform from '../components/serach/joinform'
import PeopleAsk from '../components/question/people-ask'
import Poll_Section from '../components/poll/poll-sec'
import VideoSection from '../components/posts/video-sec'
import LatestPost_sec from '../components/posts/latest-post-sec'
import FeatureArticle from '../components/question/feature-article'
import Causes from '../components/question/causes'

export default function Question() {
  return (
    <>
      <Navbar
        color='#000'
      />
      <Banner />
      <section className='py-16'>
        <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-10 gap-7'>
          <div className='md:w-1/2 w-full'>
            {/* <CauseTags /> */}
            <div className='mt-10'>
              <PeopleAsk />
            </div>
          </div>
          <div className='md:w-1/2 w-full'>
            <div className='flex flex-col gap-7'>
              {Posts.slice(1, 4).map((item, idx) => {
                return (
                  <Latest_Post key={idx} data={item} />
                )
              })}
            </div>
            <Joinform />
          </div>
        </div>
      </section>
      <Poll_Section polls={undefined} />
      <VideoSection articles={undefined} />
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
              <Causes data={undefined} />
            </div>
          </div>
        </div>
      </section>
      <LatestPost_sec articles={[]} />
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