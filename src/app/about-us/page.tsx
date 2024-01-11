import React from 'react'
import Banner from '../components/about/banner'
import Navbar from '../components/header/navbar'
import BrandBox from '../components/about/brand-box'

export default function About_Us() {
  return (
    <>
      <Navbar color='#fff' />
      <Banner />
      <section className='py-16'>
        <BrandBox
          title="Get in the know with Giddy"
          subtitle="Your health shouldn’t be a question mark"
          content="Giddy™ is the world’s largest sexual health platform. At Get Me Giddy, we shine a light on wellness topics that aren’t always showcased because of their intimate nature. We want our readers to have access to expert-reviewed content that allows them to take charge of their sexual health and also enhances their quality of life."
          bg="bg-[url('/images/brands/bg1.png')]"
          color="text-[#F35D83]"
          img="/images/brands/2.png" />
        <BrandBox
          title="Eddie is here to help lift you up"
          subtitle="Tackle your erectile dysfunction today"
          content="Erectile Dysfunction is the #1 most common sexual problem men report to their physicians. That’s why we created Eddie by Giddy™, an FDA-registered device built to help men perform their best in bed without the side effects of ED pills. With a unique oval-shaped design and thermoplastic elastomer material, Eddie® is made with comfort in mind so you can slide it on and get it on."
          bg="bg-[url('/images/brands/bg2.png')]"
          color="text-[#122634]"
          img="/images/brands/1.png" />
        <BrandBox
          title="Introducing Giddy Health"
          subtitle="Add these healthy supplements to your routine"
          content="Here at Giddy Health, we want to put that extra spring in your step. Whether it’s fueling your body with essential daily vitamins or supporting a healthy libido, our supplements are formulated to help give you that extra boost you need to succeed."
          bg="bg-[url('/images/brands/bg3.png')]"
          color="text-[#1B7F6A]"
          img="/images/brands/3.png" />
      </section>
    </>
  )
}
