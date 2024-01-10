'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import MobileNav from './mobileNav';
import Logo from './Logo';

interface INavBar {
     color: string
}

const Navbar: FC<INavBar> = ({ color }) => {
     const [isSubNav, setIsSubNav] = useState<any>()
     const [isMobileNav, setIsMobileNav] = useState(false)

     return (
          <>
               <header className='flex justify-between container mx-auto px-2 md:px-0 items-center z-50 py-4' style={{ color: `${color}` }}>
                    <div className='flex items-center gap-6'>
                         <Logo/>
                         <ul className='items-center capitalize gap-8 hidden md:flex'>
                              {
                                   NavLinks.map((nav, idx) => (
                                        <li key={idx} className='relative' onMouseLeave={() => setIsSubNav(null)} onMouseEnter={() => setIsSubNav(idx)}>
                                             <Link href={nav.link} className="hover:text-gray-300 flex item-center gap-2">
                                                  <span>{nav.name}</span>
                                                  {nav?.subNav?.length > 0 && <Image src='/svg/arrow-down.svg' alt="icon" width={12} height={12} />}
                                             </Link>
                                             {
                                                  isSubNav === idx && nav?.subNav?.length > 0 && <div className='absolute pt-4'>
                                                       <ul className='bg-white/20 p-4 min-w-[200px] rounded-lg shadow-2xl'>
                                                            {
                                                                 nav?.subNav?.map((sNav, id) => (
                                                                      <li key={id} className={`py-4 border-b border-gray-400 ${id === 0 && 'pt-1'} ${id + 1 === nav?.subNav?.length && 'pb-1 border-b-0'}`}>
                                                                           <Link href={sNav.link} className="hover:text-gray-300"><span>{sNav.name}</span></Link>
                                                                      </li>
                                                                 ))
                                                            }
                                                       </ul>
                                                  </div>
                                             }
                                        </li>
                                   ))
                              }
                         </ul>
                    </div>
                    <div className='hidden md:flex'>
                         <Link href="#">Sign Up | Login</Link>
                    </div>
                    <div className='text-2xl md:hidden' onClick={() => setIsMobileNav(!isMobileNav)}>
                         {isMobileNav ? <RxCross2 /> : <FiMenu />}
                    </div>
               </header>
               {/* MobilebNav  */}
               {isMobileNav && <MobileNav NavLinks={NavLinks}/>}
          </>
     )
}

export default Navbar



const NavLinks = [
     {
          name: 'topics',
          link: 'topics',
          subNav: [
               {
                    name: 'topics 1',
                    link: 'topics-1'
               },
               {
                    name: 'topics 1',
                    link: 'topics-1'
               }
          ]
     },
     {
          name: 'videos',
          link: 'videos',
     },
     {
          name: 'shop',
          link: 'shop',
     },
     {
          name: 'Glossary',
          link: 'glossary',
     }
]