import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
     return (
          <figure>
               <Link href="/"><Image src="/images/logo.svg" alt="Giddy" width={65} height={20} /></Link>
          </figure>
     )
}

export default Logo