import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Logo:FC<any> = ({black}) => {
     return (
          <figure>
               <Link href="/"><Image src="/images/logo.svg" alt="Giddy" width={65} height={20} className={black && 'invert'}/></Link>
          </figure>
     )
}

export default Logo