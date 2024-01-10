import React from 'react'
import Logo from '../header/Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[#1A2234] text-white'>
          <div className="container mx-auto px-3 py-[70px] gap-8 md:gap-20 grid grid-cols-1 md:grid-cols-3">
               <div>
                    <Logo/>
                    <p className='mt-3'>This information does not constitute medical advice and it should not be relied upon as such. Consult with your doctor before modifying your regular medical regimen.</p>
                    <p className='mt-8'>© 2023 Copyright Giddy® | All Rights Reserved.</p>
               </div>
               <div className='text-sm flex flex-col gap-3 md:pl-16 lg:pl-32'>
                    <h4 className='font-bold uppercase'>COMPANY</h4>
                    <Link href="#" className='hover:text-gray-400'>Terms & Conditions</Link>
                    <Link href="#" className='hover:text-gray-400'>Privacy Policy</Link>
                    <h4 className='font-bold uppercase mt-4'>COMPANY</h4>
                    <Link href="#" className='hover:text-gray-400'>Glossary</Link>
                    <Link href="#" className='hover:text-gray-400'>Our App</Link>
               </div>
               <div className='md:pl-12'>
                    <h4 className='font-bold uppercase'>SUPPORT</h4>
                    <ul className='text-sm flex flex-col gap-3 mt-3'>
                    {
                         supportingLinks.map((item,idx)=>(
                              <li key={idx}>
                                   <Link href={item.link}className='hover:text-gray-400'>{item.name}</Link>
                              </li>
                         ))
                    }
                    </ul>
               </div>
          </div>
    </footer>
  )
}

export default Footer



const supportingLinks = [
     {
          name: 'Contact',
          link: '#'
     },
     {
          name: 'Request a Resize',
          link: '#'
     },
     {
          name: 'FAQ',
          link: '#'
     },
     {
          name: 'Shipping & Returns',
          link: '#'
     },
     {
          name: '1-844-965-2755',
          link: '#'
     }
]