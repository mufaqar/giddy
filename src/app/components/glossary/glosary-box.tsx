import Link from 'next/link'
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { QTopics } from '../../../../sanity/lib/queries';
import { sortTopicsByAlphabatics } from '@/utils';

const getData = async (): Promise<any> => {
    const topics = await client.fetch(QTopics);

    return {
        topics
    };
};



const GlosaryBox = async () => {
    const { topics } = await getData()
    const sortedArray = sortTopicsByAlphabatics(topics)

    return (
        <section>
            {
                sortedArray.map((item: any, idx: number) => (
                    <div id={`${item.tag}`} key={idx}>
                        <h3 className='md:text-[32px] capitalize md:leading-[32px] text-2xl font-bold text-black pb-5 border-b border-[#C6C6C6] mb-8'>
                            {item.tag}
                        </h3>
                        <div className=''>
                            <ul className='text-lg font-medium text-black gap-3 grid md:grid-cols-3 grid-cols-1 mb-12'>
                                {
                                    item.topics?.map((t: any, id: number) => {
                                        return (
                                            <li key={id}>
                                                <Link href={`/${t?.slug?.current}` || '#'}>
                                                    {t.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }

        </section>
    )
}

export default GlosaryBox