import Navbar from './components/header/navbar'
import Hero from './components/hero/hero'
import Trendingposts from './components/posts/trendingposts'
import FeaturedContent from './components/posts/featured-content'
import VideoSection from './components/posts/video-sec'
import Poll_Section from './components/poll/poll-sec'
import LatestPost_sec from './components/posts/latest-post-sec'
import { client } from '../../sanity/lib/client'
import { QArticles, QFeaturedArticles, QPolls, QTopics } from '../../sanity/lib/queries'
import { IArticle } from '@/types/types'

const getData = async (): Promise<any> => {
  const articles = await client.fetch(QArticles);
  const featuredArticles = await client.fetch(QFeaturedArticles);
  const polls = await client.fetch(QPolls);
  const topics = await client.fetch(QTopics);

  return {
    articles,
    polls,
    topics,
    featuredArticles
  };
};

export default async function Home() {

  const {
    articles,
    polls,
    topics,
    featuredArticles
  } = await getData();

  const videoPost = articles.filter((item:IArticle)=>item?.videoURL?.length > 10)

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
        {/* {JSON.stringify(topics, null, 2)} */}
        <section className='py-16'>
            <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-7 '>
                <div className=''>
                    <Trendingposts topics={topics} />
                </div>
                <div className='md:col-span-3'>
                    <FeaturedContent featuredArticles={featuredArticles}/>
                </div>
            </div>
        </section>
        <VideoSection articles={videoPost}/>
        <Poll_Section polls={polls}/>
        <LatestPost_sec articles={articles}/>
    </>
  )
}
