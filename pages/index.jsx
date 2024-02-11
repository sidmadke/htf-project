import React from 'react'
import CategoryCart from '@/components/CategoryCart'
import food from "../images/grocery_logo.png"
import elec from "../images/electronic_image.png"
import beauty from "../images/beauty_img.png"
import fashion from "../images/fashion_image.png"
import car from "../images/car_img.png"
import fur from "../images/fur_image.png"
import LeftLanding from '@/components/LeftLanding'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = [
  { name: 'Grocery', image: food, link: '/grocerySearch' },
  { name: 'Electronic', image: elec, link: '/electronicSearch' },
  { name: 'Beauty', image: beauty, link: '/beautySearch' },
  { name: 'Fashion', image: fashion, link: '/fashionSearch' },
  // { name: 'Vehicle', image: car, link: '/vehicleSearch' },
  { name: 'Furniture', image: fur, link: '/furnitureSearch' },
]

function index() {
  return (
    <div className='w-[100%] h-[60%] p-5 -z-50 gradient-background'>
      <Navbar />
      <div className='flex'>
        <div className="w-[50%] z-50">
          <LeftLanding />
        </div>

        <div className='w-[50%] flex flex-row flex-wrap gap-8 justify-center items-center m-8 z-50'>
          {
            categories.map((category) => (
              <CategoryCart key={category.name} name={category.name} image={category.image} link={category.link} />
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default index