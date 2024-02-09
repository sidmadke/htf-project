import React from 'react'
import CategoryCart from '@/components/CategoryCart'
import sample from "../images/sample.jpg"
import grocery from "../images/grocery_image.png"
import food from "../images/burger_image.png"
import elec from "../images/electronic_image.png"
import beauty from "../images/beauty_image.png"
import fashion from "../images/fashion_image.png"
import LeftLanding from '@/components/LeftLanding'

const categories = [
  { name: 'Grocecery', image: grocery, link: '/grocecerySearch' },
  { name: 'Food', image: food, link: '/foodSearch' },
  { name: 'Electronic', image: elec, link: '/electronicSearch' },
  { name: 'Beauty', image: beauty, link: '/beautySearch' },
  { name: 'Fashion', image: fashion, link: '/fashionSearch' },
  { name: 'Vehicle', image: sample, link: '/vehicleSearch' },
]

function index() {
  return (
    <div className='w-[100%] h-[70%] flex p-5'>
      <div className="w-[40%]">
        <LeftLanding  />
      </div>

      <div className='w-[60%] flex flex-row flex-wrap gap-4 justify-center items-center'>
        {
          categories.map((category) => (
            <CategoryCart name={category.name} image={category.image} link={category.link} />
          ))
        }
      </div>
    </div>
  )
}

export default index