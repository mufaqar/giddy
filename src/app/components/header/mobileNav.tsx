import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileNav = ({ NavLinks }: any) => {
     const [isSubnav, setIsSubNav] = useState<any>()

     const handleSubNav = (idx:any) =>{
          if(isSubnav === idx) return setIsSubNav(null)
          setIsSubNav(idx)
     }

     return (
          <nav className='absolute bg-white left-0 right-0 p-5 shadow-xl top-[55px] text-black'>
               <ul className='items-center capitalize gap-8'>
                    {
                         NavLinks.map((nav: any, idx: number) => (
                              <li key={idx} className='relative'>
                                   <div className={`flex item-center justify-between w-full py-4 border-b border-gray-200 gap-2 ${NavLinks.length === idx + 1 && 'border-b-0 pb-1'}`}>
                                        <Link href={nav.link} className={`hover:text-gray-300 `}>
                                             <span>{nav.name}</span>
                                        </Link>
                                        {nav?.subNav?.length > 0 && <Image src='/svg/arrow-down.svg' className='invert' alt="icon" width={12} height={12} onClick={() => handleSubNav(idx)} />}
                                   </div>
                                   {
                                        isSubnav === idx && nav?.subNav?.length > 0 && <div className=''>
                                             <ul className=''>
                                                  {
                                                       nav?.subNav?.map((sNav: any, id: number) => (
                                                            <li key={id} className='py-4 border-b border-gray-200 pl-4'>
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
          </nav>
     )
}

export default MobileNav