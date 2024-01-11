import React from 'react'
import Navbar from '../components/header/navbar'
import Hero from '../components/hero/hero'
import GlosaryBox from '../components/glossary/glosary-box'
import FeatureArticle from '../components/question/feature-article'

export default function Glossary() {
    return (
        <>
            <Navbar color='#fff' />
            <Hero title={'Search our glossary by topic.'} bg={'hero-gradient'} />
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='text-xl font-medium text-black flex justify-between mb-10'>
                        <p>A</p>
                        <p>B</p>
                        <p>C</p>
                        <p>D</p>
                        <p>E</p>
                        <p>F</p>
                        <p>G</p>
                        <p>H</p>
                        <p>I</p>
                        <p>J</p>
                        <p>K</p>
                        <p>L</p>
                        <p>M</p>
                        <p>N</p>
                        <p>O</p>
                        <p>P</p>
                        <p>Q</p>
                        <p>R</p>
                        <p>S</p>
                        <p>T</p>
                        <p>U</p>
                        <p>V</p>
                        <p>W</p>
                        <p>X</p>
                        <p>Y</p>
                        <p>Z</p>
                    </div>
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