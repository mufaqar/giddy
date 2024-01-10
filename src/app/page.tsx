import Image from 'next/image'
import Navbar from './components/header/navbar'
import Hero from './components/hero/hero'

export default function Home() {
  return (
    <>
        <Navbar
          color='#fff'
        />
        <Hero
          title="Have health questions? Get answers."
          info="Empowering Sexual Health: your comprehensive guide to informed wellness. Ask questions and get  expert answers to your most pressing questions and navigate your journey with confidence."
          bg="hero-gradient"
          tourVideo={true}
        />
    </>
  )
}
