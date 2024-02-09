import React from 'react'
import PriceCard from './PriceCard'
import SampleLogo from '../images/Zomato_logo.png'

const sampleResult=[
    {logo:SampleLogo, price:251},
    {logo:SampleLogo, price:251},
    {logo:SampleLogo, price:251},
    {logo:SampleLogo, price:251},
    {logo:SampleLogo, price:251},
]

const SearchnResult = () => {
    return (
        <div className='bg-transparent h-full  mx-32 flex flex-col pt-52 items-center gap-20'>
            <div className='bg-transparent flex flex-row gap-5 w-4/5 ml-96'>
                <input type="text" placeholder='Search product' className='p-4 w-1/2 rounded-xl'/>
                <button type="submit" className='bg-green-500 rounded-xl p-5'>Search</button>
            </div>
            <div className='w-3/4 ml-60'>
                <div className='flex flex-col gap-5'>
                    {sampleResult.map((result)=>(
                        <PriceCard logo={result.logo} price={result.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchnResult