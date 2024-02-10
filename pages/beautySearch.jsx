"use-client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import search from '../images/search_icon.png';
import SearchnResult from '@/components/SearchnResult';
import amazon from "../images/amazon_logo.png";
import flipkart from "../images/flipkart_logo.png";
import nykaa from "../images/nyka_logo.png";
import myntra from "../images/myntra_logo.png";
import ajio from "../images/ajio_logo.png";
import axios from 'axios'

const beautySearch = () => {

  const [name, setName] = useState('');
  const [priceArray, setPriceArray] = useState(0);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const sampleResult = [
    { logo: ajio, price: priceArray[0], link: 'https://www.ajio.com/', slink: 'https://www.ajio.com/' },
    { logo: amazon, price: priceArray[1], link: 'https://www.amazon.in/', slink: 'https://www.amazon.in/' },
    { logo: flipkart, price: priceArray[2], link: 'https://www.flipkart.com/', slink: 'https://www.flipkart.com/' },
    { logo: myntra, price: priceArray[3], link: 'https://www.myntra.com/', slink: 'https://www.myntra.com/' },
    { logo: nykaa, price: priceArray[4], link: 'https://www.nykaa.com/sp/new-customers-mweb/new-customers?pagetitle=new-customers-mweb&utm_content=ads&utm_source=GooglePaid&utm_medium=search&utm_campaign=Search_Nykaa_NCA&hlp=hlpa&gad_source=1&gclid=CjwKCAiA2pyuBhBKEiwApLaIOz8tDjsZ0V-C-1Fz3jtSbUUg_gKewLHUfcrywjco_hSkfqgkiG-H8xoCL24QAvD_BwE', slink: 'https://www.nykaa.com/' },
  ];

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/beauty?productName=${name}`);
      console.log(response.data.prices);
      setPriceArray(response.data.prices)
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

            {
              priceArray ?
              <><SearchnResult sampleResult={sampleResult} prices={priceArray}/></> : 
              <></>
            }

          </div>
        </div>
        <div className='flex justify-center my-3'>
          <button onClick={() => window.location.href = '/'} className='bg-[#7f8f9c] px-10 py-4 rounded-3xl text-2xl text-white'>Back</button>
        </div>
      </div>
    </div>
  );
};

export default beautySearch;
