import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../../components/assets/dropdown_icon.png'
import Item from '../../components/item/Item'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='mx-32'>
      <img className='block mb-10' src={props.banner} />
      <div className="flex mx-24 justify-between items-center">
        <p className='font-medium text-gray-600'><span className='font-bold text-black'>Showing 1-12</span> out of 36 product</p>
        <div className="flex p-3 gap-2 rounded-3xl border-2 justify-center items-center">
          Sort by<img src={dropdown_icon} className='h-3' />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-8">
        {all_product.map((item, i) => {
          if(props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
            else {
              return null;
            }
        })}
      </div>
      <div className='flex justify-center items-center w-52 h-12 bg-pink-200 rounded-full mx-auto my-32'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
