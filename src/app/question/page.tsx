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
            <CauseTags />
            <div className='mt-10'>
              <PeopleAsk />
            </div>
          </div>
          <div className='md:w-1/2 w-full'>
            <div className='flex flex-col gap-7'>
              {Posts.map((item, idx) => {
                return (
                  <Latest_Post key={idx} data={item} />
                )
              })}
            </div>
            <Joinform />
          </div>
        </div>
      </section>
      <Poll_Section />
      <VideoSection />
      <LatestPost_sec />
    </>
  )
}

const Posts = [
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