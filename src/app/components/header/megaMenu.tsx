import React from 'react'
import Link from 'next/link';


const MegaMenu = ({isSubNav, setIsSubNav, topics}:any) => {     

     return (
          <section className={`absolute bg-white w-full  px-1 py-10 transition-all duration-300 ease-linear pt-20 z-[1] ${isSubNav === 0 ? 'top-0' : '-top-[100%]'}`}
               onMouseEnter={()=>setIsSubNav(0)}
               onMouseLeave={()=>setIsSubNav(null)}
          >
               <div className="container mx-auto grid grid-cols-5">
                    {
                       topics?.slice(0,5)?.map((t:any,idx:number)=>(
                         <ul key={idx} >
                              <li className="font-semibold mb-3"><Link href={'/'+t.slug?.current || '#'}>{t.name}</Link></li>
                              {
                                   t?.subtopics?.map((st:any,id:number) => {
                                        return(
                                             <li key={id} className="font-light hover:text-blue-500 py-2"><Link href={'/'+t.slug?.current+'/'+st.slug?.current || '#'}>{st.name}</Link></li>
                                        )
                                   })
                              }
                         </ul>
                       ))
                    }
               </div>
          </section>
     )
}

export default MegaMenu