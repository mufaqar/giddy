import Link from 'next/link'
import React from 'react'

const GlosaryBox = () => {
    return (
        <div>
            <h3 className='md:text-[32px] md:leading-[32px] text-2xl font-bold text-black pb-5 border-b border-[#C6C6C6] mb-8'>
                A
            </h3>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                <ul className='text-lg font-medium text-black flex flex-col gap-3'>
                    <li>
                        <Link href="#">
                            Abdominal Pain
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Abortion
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Allergies
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Antibiotics
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Arthritis
                        </Link>
                    </li>
                </ul>
                <ul className='text-lg font-medium text-black flex flex-col gap-3'>
                    <li>
                        <Link href="#">
                            ART
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Alzheimer’s Disease
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Antidepressants
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            ADHD
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Autoimmune Disorder
                        </Link>
                    </li>
                </ul>
                <ul className='text-lg font-medium text-black flex flex-col gap-3'>
                    <li>
                        <Link href="#">
                            Alcohol Use Disorder
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Andropause
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Anxiety
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Asthma
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GlosaryBox