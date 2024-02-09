import React from 'react'
import CategoryCart from '@/components/CategoryCart'
import sample from "../images/sample.jpg"

const categories = [
  { name: 'Grocecery', image: sample, link:'/grocecerySearch' },
  { name: 'Food', image: sample, link:'/foodSearch' },
  { name: 'Electronic', image: sample, link:'/electronicSearch' },
  { name: 'Beauty', image: sample, link:'/beautySearch' },
  { name: 'Fashion', image: sample, link:'/fashionSearch' },
  { name: 'Vehicle', image: sample, link:'/vehicleSearch' },
]

function index() {
  return (
    <>
      <div className='flex flex-row gap-4 justify-center items-center'>
        {
          categories.map((category) => (
            <CategoryCart name={category.name} image={category.image} link={category.link}/>
          ))
        }
      </div>
    </>
  )
}

export default index