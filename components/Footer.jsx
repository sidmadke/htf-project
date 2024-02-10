import React from 'react'
import fb from "../images/facebook_logo.png"
import tw from "../images/twitter_logo.png"
import inst from "../images/instagram_logo.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='p-2 text-xl font-medium text-center flex justify-between'>
            <span className="flex-grow">@ All rights reserved by compare cart 2024</span>
            <div className='flex gap-1 '>
                <Image src={tw} height={35} width={35} />
                <Image src={fb} height={35} width={35} />
                <Image src={inst} height={35} width={35} />
            </div>
        </div>
    )
}

export default Footer