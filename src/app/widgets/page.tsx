import React from 'react'
import Trendingposts from '../components/posts/trendingposts'
import FeaturedContent from '../components/posts/featured-content'

export default function Widgets() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 '>
                <div className='md:w-1/4 w-full'>
                    <Trendingposts />
                </div>
                <div className='md:w-3/4 w-full'>
                    <FeaturedContent />
                </div>
            </div>
        </section>
    )
}
