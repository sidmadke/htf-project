import React from 'react'
import CategoryCart from '@/components/CategoryCart'
import sample from "../images/sample.jpg"

const categories = [
  { name: 'Grocecery', image: sample },
  { name: 'Food', image: sample },
  { name: 'Electronic', image: sample },
  { name: 'Beauty', image: sample },
  { name: 'Fashion', image: sample },
  { name: 'Vehicle', image: sample },
]

function index() {
  return (
    <>
      <div className='flex flex-row gap-4 justify-center items-center'>
        {
          categories.map((category) => (
            <CategoryCart name={category.name} image={category.image} />
          ))
        }
      </div>
    </>
  )
}

export default index