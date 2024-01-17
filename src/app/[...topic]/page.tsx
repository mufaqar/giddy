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
import { QArticles, QFeaturedArticles, QSingleSubTopic, QSingleTopic } from '../../../sanity/lib/queries'
import { client } from '../../../sanity/lib/client'
import { IArticle } from '@/types/types'


const getData = async (slug: any): Promise<any> => {
    const articles = await client.fetch(QArticles);
    const featureArticles = await client.fetch(QFeaturedArticles);
    const topic = await client.fetch(slug.length > 1 ? QSingleSubTopic : QSingleTopic, {
        slug: slug.length > 1 ? slug[1] : slug[0]
    });

    var featureArticlesByTopics

    if (slug.length > 1) {
        featureArticlesByTopics = featureArticles.filter((item: any) => {
            return item?.topic?.subtopics?.some((subtopic: any) => subtopic.slug.current === slug[1]);
        });
    } else {
        featureArticlesByTopics = featureArticles?.filter((item: any) => item.topic?.slug?.current === slug[0])
    }

    return {
        articles,
        topic,
        featureArticlesByTopics
    };
};

export default async function Topics(props: any) {
    const {
        articles,
        topic,
        featureArticlesByTopics
    } = await getData(props.params.topic);
        console.log("🚀 ~ Topics ~ topic:", topic)


    const videoPost = articles.filter((item: IArticle) => item?.videoURL?.length > 10)

    return (
        <>
            <Navbar
                color='#000'
            />
            <section className='!text-black'>
                <Hero title={topic?.name} bg="hero-gradient2" topic={topic?.subtopics} color='#000' />
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col md:gap-10 gap-7'>
                    <div className='md:w-1/2 w-full'>
                        <CauseTags data={topic} />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <div className='mb-10'>
                            <PeopleAsk data={topic?.peopleAlsoAsk} />
                        </div>
                        <Joinform />
                    </div>
                </div>
            </section>
            <section className='py-16 bg-zinc-50'>
                <div className='container mx-auto px-4 relative'>
                    <h2 className='md:text-[40px] leading-[45px] font-medium text-black mb-8'>
                        Featured Articles: {topic?.name}
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-7 '>
                        <div className=''>
                            {featureArticlesByTopics?.slice(0, 1).map((item: any, idx: number) => {
                                return (
                                    <FeatureArticle key={idx} data={item} />
                                )
                            })}
                        </div>

                        <div className='md:col-span-2'>
                            <Causes data={featureArticlesByTopics.slice(1, 10)} />
                        </div>
                    </div>
                </div>
            </section>
            <VideoSection articles={videoPost} />
            <LatestPost_sec articles={articles.slice(0, 3)} />
        </>
    )
}

