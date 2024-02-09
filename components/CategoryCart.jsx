"use-client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryCart = (props) => {
  return (

    <Link href={props.link}>
      <div className="w-60 h-72 p-4 f rounded-3xl flex flex-col justify-center items-center gap-5 text-2xl bg-[#D9D9D9]">
        <Image height={500} width={500} src={props.image} className='rounded-3xl'/>
        <div>{props.name}</div>
      </div>
    </Link>
  )
}

export default CategoryCart