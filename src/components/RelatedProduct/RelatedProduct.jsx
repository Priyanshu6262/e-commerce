import React from 'react'
import data_product from '../assets/data'
import Item from '../item/Item'

const RelatedProduct = () => {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <h1 className="text-stone-900 text-4xl font-semibold">Related Product</h1>
      <hr className='rounded-md bg-stone-900 h-1 w-[150px]'/>
      <div className="mt-10 flex gap-8">
        {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
