'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import MobileNav from './mobileNav';
import Logo from './Logo';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MegaMenu from './megaMenu';

interface INavBar {
     color: string
}

const Navbar: FC<INavBar> = ({ color }) => {
     const [isSubNav, setIsSubNav] = useState<any>()
     const [isMobileNav, setIsMobileNav] = useState(false)

     return (
          <>
               <header className={`flex justify-between container mx-auto relative px-2 md:px-0 items-center z-50 py-4 ${isSubNav === 0 && '!text-black'}`} style={{ color: `${color}` }}>
                    <div className='flex items-center gap-6'>
                         <Logo black={color === '#000' || isSubNav === 0}/>
                         <ul className='items-center capitalize gap-8 hidden md:flex'>
                              {
                                   NavLinks.map((nav:any, idx:number) => (
                                        <li key={idx} className='relative' onMouseLeave={() => setIsSubNav(null)} onMouseEnter={() => setIsSubNav(idx)}>
                                             <Link href={nav.link} className={`flex items-center gap-1 ${color === '#000' ? 'hover:text-blue-500' : 'hover:text-gray-300'}`}>
                                                  <span>{nav.name}</span>
                                                  {nav?.subNav === true && (isSubNav === idx ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>)  }
                                             </Link>
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
               {/* Mega Menu */}
               {<MegaMenu isSubNav={isSubNav}/>}
               {/* Mobileb Nav  */}
               {isMobileNav && <MobileNav NavLinks={NavLinks}/>}
          </>
     )
}

export default Navbar



const NavLinks = [
     {
          name: 'topics',
          link: '#',
          subNav: true
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