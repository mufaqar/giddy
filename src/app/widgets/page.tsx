import React from 'react'
import Trendingposts from '../components/posts/trendingposts'
import FeaturedContent from '../components/posts/featured-content'

export default function Widgets() {
    return (
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
    )
}
