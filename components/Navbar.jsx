import Image from 'next/image'
import React from 'react'
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='px-6'>
        <Image src={logo} height={190} width={190}/>
    </div>
  )
}

export default Navbar