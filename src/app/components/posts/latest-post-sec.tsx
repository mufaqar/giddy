import React, { FC } from 'react'
import Latest_Post from './latest-post'
import Sidebar from './sidebar'
import { IArticle, TArticles } from '@/types/types'

interface IPostProps {
    articles : TArticles
}

const LatestPost_sec:FC<IPostProps> = ({articles}) => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-[40px] md:leading-[45px] text-3xl font-medium text-black mb-10'>
                    Latest from Giddy
                </h2>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
                    <div className='md:col-span-3'>
                        <div className='flex flex-col gap-7'>
                            {articles?.map((item:IArticle, idx:number) => {
                                return (
                                    <Latest_Post key={idx} data={item}/>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className='text-center mt-16'>
                    <button className='text-lg font-medium text-black py-3 px-[50px] border border-black bg-transparent hover:text-white hover:bg-black hover:scale-95 transition-all duration-200 ease-linear rounded-lg max-w-[350px] w-full mx-auto'>
                        Load more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default LatestPost_sec

const Posts = [
    {
        cate: "Future Sex",
        link: "#",
        img: "/images/feature/1.png",
        title: "Our Sex Drive Drives Technological Innovation",
        excerpt: "Necessity may be the mother of invention, but pleasure is the unsung motivator of progress.",
        author: "By Paul Schrodt",
        comments: "9",
    },
    {
        cate: "HIV & AIDS",
        link: "#",
        img: "/images/feature/2.png",
        title: "Using Dating Apps to Discover Your Sexuality",
        excerpt: "At-home kits are available to anyone 17 or older. Here's how to order and how it works.",
        author: "By Paul Schrodt",
        comments: "9",
    },
    {
        cate: "Penis & Testicle Health",
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Does Vaping Cause Erectile Dysfunction?",
        excerpt: "",
        author: "By Paul Schrodt",
        comments: "9",
    },
    {
        cate: "Vaginal Health",
        link: "#",
        img: "/images/feature/4.png",
        title: "The Vulva Positivity Movement",
        excerpt: "Some people are celebrating lips of all shapes, colors and sizes as labiaplasty cases skyrocket.",
        author: "By Paul Schrodt",
        comments: "9",
    },
    {
        cate: "Ovarian Cancer",
        link: "#",
        img: "/images/feature/5.png",
        title: "Student Is Diagnosed With Cancer After Years of 'Medical Gaslighting'",
        excerpt: "The patient says one doctor disregarded her painful abdominal symptoms as thong irritation.",
        author: "By Paul Schrodt",
        comments: "2",
    },
    {
        cate: "Reproductive Health",
        link: "#",
        img: "/images/feature/6.png",
        title: "What Was Abortion Like in Early America?",
        excerpt: "The procedure might not have been enshrined in the Constitution, but it wasn't illegal, either.",
        author: "By Paul Schrodt",
        comments: "2",
    },
]