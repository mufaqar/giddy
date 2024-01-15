import React from 'react'
import Navbar from '../components/header/navbar'
import Hero from '../components/hero/hero'
import GlosaryBox from '../components/glossary/glosary-box'
import FeatureArticle from '../components/question/feature-article'
import { alphabetArray } from '@/utils'
import Link from 'next/link'


export default async function Glossary() {

    return (
        <>
            <Navbar color='#fff' />
            <Hero title={'Search our glossary by topic.'} bg={'hero-gradient'} />
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <ul className='text-xl uppercase cursor-pointer font-medium text-black flex justify-between mb-10'>
                        {alphabetArray?.map((letter:any) => (
                            <li key={letter} className='hover:text-gray-400'>
                                <Link href={`#${letter}`}>{letter}</Link>
                            </li>
                        ))}
                    </ul>
                   
                    <div className='flex md:flex-row flex-col md:gap-10 gap-7'>
                        <div className='md:w-2/3 w-full md:pr-10'>
                            <GlosaryBox />
                        </div>
                        <div className='md:w-1/3 w-full'>
                            {Posts.slice(0, 1).map((item, idx) => {
                                return (
                                    <FeatureArticle key={idx} data={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Posts = [
    {
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Aydian Dowling on sexual health and intimacy as a transgender man",
        comments: "2",
    },
]