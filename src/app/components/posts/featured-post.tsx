import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const FeaturedPost = ({ data, custm_class }: any) => {

    return (
        <div className='px-2'>
            {data?.video ?
                (<div className="aspect-video">
                    <iframe src={`http://www.youtube.com/watch?v=${data?.vid}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>)
                :
                (<Image src={data?.img} width={224} height={140} className='w-full' />)
            }
            <Link href="#" className={`text-base font-medium mt-2 block ${custm_class}`}>
                {data?.title}
            </Link>
        </div>
    )
}

export default FeaturedPost