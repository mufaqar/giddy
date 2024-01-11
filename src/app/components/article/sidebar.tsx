import React from 'react'
import FeaturedPost from '../posts/featured-post'
import PeopleAsk from '../question/people-ask'

const Article_Sidebar = () => {
    return (
        <div>
            <div>
                {Posts.slice(0, 1).map((item, idx) => {
                    return (
                        <FeaturedPost key={idx} data={item} />
                    )
                })}
            </div>
            <div className='mt-8'>
                <PeopleAsk />
            </div>
        </div>
    )
}

export default Article_Sidebar
const Posts = [
    {
        cate: "Dating & Relationships",
        link: "#",
        img: "/images/risk.png",
        title: "Risk Factors for Breast Cancer",
        excerpt: "Know your risk and how to minimize it to decrease the odds of a breast cancer diagnosis.",
        comments: "2",
    },
]