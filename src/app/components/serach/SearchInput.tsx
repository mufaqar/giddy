import React from 'react'
import { GrSearch } from "react-icons/gr";

const SearchInput = () => {
  return (
    <div className='bg-white flex items-center rounded-lg px-4'>
          <input type='text' placeholder='Ask a question' className='py-3 text-black bg-transparent outline-none ring-0 w-full'/>
          <GrSearch  className="text-[#307FE2] cursor-pointer hover:scale-105 text-2xl"/>
    </div>
  )
}

export default SearchInput