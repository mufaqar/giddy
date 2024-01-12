import React from 'react'
import Navbar from '../components/header/navbar'
import ReviewBpx from '../components/review/review-box'
import { client } from '../../../sanity/lib/client';
import { QReviews } from '../../../sanity/lib/queries';
import { IReviewProps } from '@/types/types';

const getData = async (): Promise<any> => {
    const allreview = await client.fetch(QReviews);
    return {
        allreview,
    };
  };


export default async function Reviews() {
    const { allreview } = await getData()    
    return (
        <>
            <Navbar color='#fff' />
            <section className='-mt-16 pt-28 pb-16 bg-gradient-radial from-[#444F74] via-[#13183C] to-[#13183C]'>
                <div className='container mx-auto px-4'>
                    <h1 className='md:text-5xl text-3xl font-medium text-white text-center'>
                        Medical Review
                    </h1>
                    <p className='text-lg font-medium text-white text-center mt-5'>
                        To help us maintain the highest standards of excellence, our professional reviewers are trained physicians who represent a broad spectrum of specialties and expertise, and credentialed counselors and therapists who work with individuals, groups, couples and families. Their knowledge and guidance ensure our content is factual, accurate and authentic—useful and actionable information on which you can rely.
                    </p>
                    <p className='text-lg font-medium text-white text-center mt-5'>
                        Developments move quickly in the world of sexual health. We’ll update existing articles and bring you new ones as medical breakthroughs happen, and our writers and reviewers will keep you on the cutting edge of all that’s going on in the world of clinical research.
                    </p>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h2 className='md:text-[40px] md:leading-[52px] text-3xl font-medium text-black mb-8'>
                        Our Medical Reviewers
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                        {allreview?.map((item: IReviewProps, idx:number) => {
                            return (<ReviewBpx key={idx} data={item}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
