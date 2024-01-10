import Image from 'next/image'
import Navbar from './components/header/navbar'
import Hero from './components/hero/hero'
import Trendingposts from './components/posts/trendingposts'
import FeaturedContent from './components/posts/featured-content'
import VideoSection from './components/posts/video-sec'
import Poll_Section from './components/poll/poll-sec'

export default function Home() {
  return (
    <>
        <Navbar
          color='#fff'
        />
        <Hero
          title="Have health questions? Get answers."
          info="Empowering Sexual Health: your comprehensive guide to informed wellness. Ask questions and get  expert answers to your most pressing questions and navigate your journey with confidence."
          bg="hero-gradient"
          tourVideo={true}
        />
        <section className='py-16'>
            <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-7 '>
                <div className=''>
                    <Trendingposts />
                </div>
                <div className='md:col-span-3'>
                    <FeaturedContent />
                </div>
            </div>
        </section>
        <VideoSection />
        <Poll_Section />
    </>
  )
}
