"use-client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import search from '../images/search_icon.png';
import SearchnResult from '@/components/SearchnResult';
import amazon from "../images/amazon_logo.png";
import flipkart from "../images/flipkart_logo.png";
import axios from 'axios'
import swiggy from "../images/swiggymart_logo.png"
import { Triangle } from 'react-loader-spinner';


const GrocerySearch = () => {
  const [name, setName] = useState('');
  const [priceArray, setPriceArray] = useState(0);
  const [loader, setLoader] = useState(false)

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const sampleResult = [
    { logo: amazon, price: priceArray[0], link: 'https://www.amazon.in/', slink: 'https://www.amazon.in/' },
    { logo: flipkart, price: priceArray[1], link: 'https://www.flipkart.com/', slink: 'https://www.flipkart.com/' },
    { logo: swiggy, price: priceArray[2], link: 'https://www.swiggy.com/instamart', slink: 'https://www.swiggy.com/instamart' }
  ]

  const handleSubmit = async () => {
    try {
      setLoader(true)
      const response = await axios.post(`https://htf-backend.onrender.com/grocery?productName=${name}`);
      console.log(response.data.prices);
      setPriceArray(response.data.prices)
      setLoader(false)
    } catch (error) {
      console.log('Error occurred while making the request:', error);
    }
  };


  return (
    <div className='gradient-background h-[100vh]'>
      <div className='gradient-background'>
        <div className='flex justify-center p-6'>
          <div className='bg-[#C1C5CD] w-[40%] rounded-3xl '>
          <div className='bg-[#7f8f9c] h-20 text-gray-700 text-2xl rounded-3xl flex items-center px-5 gap-8 justify-between'>
              <div className='flex items-center gap-8'>
                <Image src={search} className='h-10 w-10' />
                <input
                  type="text"
                  placeholder='Search product'
                  className='bg-transparent outline-none'
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit} className='bg-[#36454F] px-8 py-3 rounded-xl text-white hover:bg-[#4c606e]'>Submit</button>
            </div>
            <>
              {priceArray ?
                <><SearchnResult sampleResult={sampleResult} prices={priceArray} /></> :
                <div className={`flex flex-row justify-center items-center ${!loader ? `h-0` : `h-96`} bg-transparent`}>
                  {loader &&
                    <Triangle
                      visible={true}
                      height="150"
                      width="150"
                      color="#7f8f9c"
                      ariaLabel="triangle-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />}
                </div>}
            </>

          </div>
        </div>
        <div className='flex justify-center my-3'>
          <button onClick={() => window.location.href = '/'} className='bg-[#7f8f9c] px-10 py-4 rounded-3xl text-2xl text-white'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default GrocerySearch