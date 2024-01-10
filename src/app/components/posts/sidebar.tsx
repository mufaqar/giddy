import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='bg-white rounded-lg p-5 shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)] '>
        <h2 className='text-xl font-medium text-[#307FE2] flex gap-1.5 items-center'>
          <div className='bg-[#307FE2] w-1.5 h-3.5 rounded-sm'></div>Lifestyle & Health
        </h2>
        <p className='text-base font-medium text-black'>
          “How can I increase my sex drive?”
        </p>
        <p className='text-base font-normal text-[#737373]'>
          To boost your sex drive, maintain a healthy lifestyle with regular exercise and a balanced diet. Manage stress, ensure adequate sleep, communicate openly with your partner, and ...
          <span className='font-medium text-[#307FE2]'>
            Continue reading
          </span>
        </p>
      </div>
      <div className='mt-8'>
        <Image src="/images/feature/adver1.png" alt='img' width={353} height={353} className='w-full h-full shadow-[0_6px_20px_0px_rgba(0,0,0,0.1)]' />
      </div>
    </>
  )
}

export default Sidebar