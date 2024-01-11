import React from 'react'
import Navbar from '../components/header/navbar'
import Breadcrumb from '../components/article/breadcrumb'
import Image from 'next/image'
import Article_Sidebar from '../components/article/sidebar'
import Latest_Post from '../components/posts/latest-post'
import ShareButtons from '../components/article/share-buttons'

export default function Sing_Article() {
    return (
        <>
            <Navbar color='#000' />
            <main className='bg-[#fbfbfb]'>
                <section className='py-16'>
                    <div className='container mx-auto px-4 md:pl-[200px] relative'>
                        <div>
                            <Breadcrumb />
                        </div>
                        <div className='my-10'>
                            <h1 className='md:text-5xl text-3xl font-medium text-black'>
                                What Are the Symptoms of Breast Cancer?
                            </h1>
                            <p className='md:text-2xl text-lg font-medium text-black mt-4 mb-10'>
                                Empowering awareness: Navigating breast cancer symptoms – A comprehensive guide for early detection and informed decision-making.
                            </p>
                            <p className='md:text-xl text-base font-medium text-black'>
                                By: Ashley Broadwater and Molly Armstrong
                            </p>
                            <ul className='md:text-xl text-base font-medium text-[#868686] flex justify-between flex-wrap'>
                                <li>
                                    Reviewed by: Jillian Rowbotham, D.O.
                                </li>
                                <li>
                                    Published May 05, 2023
                                </li>
                            </ul>
                            <div className='md:absolute top-1/2 left-0 static md:mt-0 mt-5'>
                                <ShareButtons />
                            </div>
                            <div className='my-8'>
                                <Image src="/images/article/1.png" alt='feature' width={868} height={524} className='h-full w-full' />
                            </div>
                        </div>
                    </div>
                    <div className='container mx-auto px-4 md:pl-[200px] flex md:flex-row flex-col gap-7'>
                        <div className='md:w-2/3 w-full ml-auto border-b border-[#C6C6C6] pb-16'>
                            <h2 className='md:text-5xl text-3xl font-medium text-black'>
                                Learn the potential complications, causes, treatment and other details you need to know.
                            </h2>
                            <p className='text-lg font-normal text-black mt-5'>
                                You or someone you know will likely have breast cancer at some point in your life. It’s scary to think about but hard to ignore. Other than skin cancer, breast cancer is the most common type of cancer in the United States.
                            </p>
                            <p className='text-lg font-normal text-black mt-5'>
                                That’s a big reason breast cancer awareness, education and screenings are all so important.
                            </p>
                            <h2 className='md:text-5xl text-3xl font-medium text-black mt-10'>
                                Breast Cancer Prevalence
                            </h2>
                            <p className='text-lg font-normal text-black mt-5'>
                                Statistically, 1 in 8 women will receive a breast cancer diagnosis, and a smaller number of males will. Roughly 5 percent of people are diagnosed with stage IV cancer. The other 95 percent receive their diagnosis earlier, before it metastasizes.
                                Detecting it sooner rather than later is always best. The five-year relative survival rate for breast cancer is 99 percent if it is detected in the localized stage and 86 percent at the regional stage.
                            </p>
                            <p className='text-lg font-normal text-black mt-5'>
                                The most prominent early warning sign of breast cancer is a breast lump.
                                "Although there are many different presentations of breast cancer, a palpable lump is the most common and can occur within the breast to the armpit," said Kenneth Meng, M.D., a diagnostic radiologist with the Center for Cancer Prevention and Treatment at Providence St. Joseph Hospital in Orange County, California.
                            </p>
                            <h2 className='md:text-5xl text-3xl font-medium text-black mt-10'>
                                Breast Cancer Screening
                            </h2>
                            <p className='text-lg font-normal text-black mt-5'>
                                "Not every lump is breast cancer, as benign cysts or fibroadenomas can also be felt on [a] physical exam," Meng said. "However, it is important to have any lump checked out."
                                Guidelines as to whether to have a clinical breast exam—a physical examination by a doctor—vary.
                            </p>
                            <div className='flex md:flex-row flex-col gap-5 justify-between items-center mt-8'>
                                <h3 className='md:text-[32px] md:leading-[38px] text-2xl font-medium text-black'>
                                    The common symptoms of breast cancer include <span className='text-[#F8485E]'>bone pain, fatigue, weight loss, coughing or shortness of breath, jaundice, seizures, headaches and vision changes</span>, too, according to Farrington.
                                </h3>
                                <div>
                                    <p className='text-lg font-normal text-black'>
                                        The National Comprehensive Cancer Network recommends clinical breast exams every one to three years for asymptomatic women of average risk—ages 25 to 39—and yearly for asymptomatic women of average risk age 40 and above.
                                    </p>
                                    <p className='text-lg font-normal text-black mt-5'>
                                        The U.S. Preventive Services Task Force (USPSTF), however, no longer recommends clinical breast exams. Speak with your doctor to determine your best course of action.
                                    </p>
                                    <p className='text-lg font-normal text-black mt-5'>
                                        If you notice a lump or a thickening of your breast tissue during a self-exam, contact your doctor. Not every person with breast cancer will feel a lump, however.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/3 w-full'>
                            <Article_Sidebar />
                        </div>
                    </div>
                    <div className='container mx-auto px-4 md:pl-[200px]'>
                        <div className='md:w-2/3 w-full pt-10'>
                            <h2 className='md:text-[40px] md:leading-[52px] text-3xl font-medium text-black mb-8'>
                                Related Articles
                            </h2>
                            <div className='flex flex-col gap-7'>
                                {Posts?.map((item, idx) => {
                                    return (
                                        <Latest_Post key={idx} data={item} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const Posts = [
    {
        cate: "Dating & Relationships",
        link: "#",
        video: "yAoLSRbwxL8",
        title: "Aydian Dowling on sexual health and intimacy as a transgender man",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
        comments: "2",
    },
    {
        cate: "Future Sex",
        link: "#",
        img: "/images/feature/1.png",
        title: "Our Sex Drive Drives Technological Innovation",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
        authore:"By María Cristina Lalonde",
        comments: "9",
    },
    {
        cate: "HIV & AIDS",
        link: "#",
        img: "/images/feature/2.png",
        title: "Using Dating Apps to Discover Your Sexuality",
        excerpt: "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
        authore:"By María Cristina Lalonde",
        comments: "9",
    },
]