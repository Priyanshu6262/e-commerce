import React from 'react'
import data_product from '../assets/data'
import Item from '../item/Item'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-stone-900 text-4xl font-semibold'>POPULAR IN WOMAN</h1>
      <hr className='w-48 h-1 rounded-sm bg-stone-800'/>
      <div className="mt-10 -mb-14 flex gap-8">
        {data_product.map((item, i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
