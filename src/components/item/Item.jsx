import React from 'react'
import { Link } from 'react-router-dom' 

const Item = (props) => {
  return (
    <div className='w-60 hover:scale-100 delay-0.6'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} /></Link>
      <p className='mt-2 font-medium'>{props.name}</p>
      <div className="flex gap-4 ">
        <div className="text-slate-700 text-xl font-semibold">
            ${props.new_price}
        </div>
        <div className='text-slate-400 text-xl font-medium line-through'>
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
