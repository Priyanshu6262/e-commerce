import React from 'react'
import new_collections from '../assets/new_collections'
import Item from '../item/Item'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-stone-900 text-4xl font-semibold'>NEW COLLECTIONS</h1>
      <hr className='w-48 h-1 rounded-sm bg-stone-800'/>
      <div className="grid grid-cols-4 mt-10 gap-8">
        {new_collections.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
