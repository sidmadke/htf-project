"use-client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryCart = (props) => {
  return (

    <Link href={props.link} >
      <div className="w-60 h-72 p-4 rounded-3xl flex flex-col justify-center items-center gap-5 text-2xl bg-[#D9D9D9] z-50" 
      
      style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'}}
      >
        <div className='h-[70%] flex justify-center items-center'><Image src={props.image} height={180} width={180} /></div>
        <div className='h-[30%] flex justify-center items-center'>{props.name}</div>
      </div>
    </Link>
  )
}

export default CategoryCart