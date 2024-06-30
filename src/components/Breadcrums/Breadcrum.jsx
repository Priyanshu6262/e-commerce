import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center gap-3 text-stone-500 text-sm font-semibold mx-32 my-8 taxt-capitalize'>
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} /> {product.category} <img src={arrow_icon} /> {product.name}
    </div>
  )
}

export default Breadcrum
