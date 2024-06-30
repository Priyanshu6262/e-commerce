import React from 'react'
import exclusive_img from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='flex bg-custom-gradient mx-32 mb-20 mt-56'>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className='text-stone-900 font-semibold text-6xl pl-20 leading-normal'>Exclusive</h1>
        <h1 className='text-stone-900 font-semibold text-6xl pl-20 leading-tight'>Offer For You</h1>
        <p className='text-stone-900 font-semibold text-l pl-20'>ONLY ON BEST SELLERS PRODUCT</p>
        <button className='flex w-44 ml-20 justify-center mt-10 border-x-2 border-y-2 p-3 rounded-3xl font-normal bg-red-600 text-white border-red-600'>Check Now</button>
      </div>
      <div className="w-80">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}

export default Offers
