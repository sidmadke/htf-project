import Image from 'next/image'
import React from 'react'

const PriceCard = (props) => {
  return (
    <>
        <div className='flex flex-row w-3/4 gap-5 p-2 rounded-xl bg-blue-200'>
            <Image src={props.logo} height={150} width={150} className='rounded-xl'/>
            <div className='flex items-center'>
                <p>Best price: {props.price}</p>
            </div>
        </div>
    </>
  )
}

export default PriceCard