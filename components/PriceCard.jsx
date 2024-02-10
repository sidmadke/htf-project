import Image from 'next/image'
import React from 'react'

const PriceCard = (props) => {
  return (
    <>

      {/* <table className='w-[100%]'>
        <tbody>

          <tr className='h-16 px-4'>
            <td className='w-[33.33%] text-center'>
              <div className='flex justify-center items-center'>
                <Image src={props.logo} height={130} width={130} />
              </div>
            </td>
            <td className='w-[33.33%] text-center text-2xl underline underline-offset-2'><a href={props.link} target='_blank'>{props.link}</a></td>
            <td >
              <div className='flex justify-center items-center text-xl font-semibold'><span className='text-black bg-[#D9D9D9] px-4 py-3 rounded-3xl'>
                {props.price}/- Rs.</span></div>

            </td>
          </tr>

        </tbody>
      </table> */}
      <div className='grid grid-cols-3 w-full'>
        <div className='col-span-1 h-16 px-4 flex justify-center items-center'>
          <div className='flex justify-center items-center'>
            <Image src={props.logo}  alt='Logo' height={130} width={130} />
          </div>
        </div>
        <div className='col-span-1 h-16 px-4 flex justify-center items-center text-center text-2xl underline underline-offset-2'>
          <a href={props.link} target='_blank'>{props.slink}</a>
        </div>
        <div className='col-span-1 h-16 flex justify-center items-center text-xl font-semibold'>
          <span className='text-black bg-[#D9D9D9] px-4 py-3 rounded-3xl'>
            {props.price}/- Rs.
          </span>
        </div>
      </div>

    </>
  )
}

export default PriceCard