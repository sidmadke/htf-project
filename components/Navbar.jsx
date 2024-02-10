import Image from 'next/image'
import React from 'react'
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <>
        <Image src={logo} height={150} width={150}/>
    </>
  )
}

export default Navbar