import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='flex mx-32'>
      <div className="flex gap-3">
        <div className="flex flex-col gap-2">
            <img className='h-[120px] w-[200px]' src={product.image} />
            <img className='h-[120px] w-[200px]' src={product.image} />
            <img className='h-[120px] w-[200px]' src={product.image} />
            <img className='h-[120px] w-[200px]' src={product.image} />
        </div>
        <div className="">
            <img  className='w-[1000px] h-[500px]' src={product.image} />
        </div>
      </div>
      <div className="flex flex-col mx-10">
        <h1 className='text-stone-600 text-4xl font-bold'>{product.name}</h1>
        <div className='flex items-center mt-2 gap-2 text-stone-800 text-xl'>
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_dull_icon} alt="" />
             <p>122</p>
        </div>
        <div className='flex my-3 gap-4 text-xl font-semibold'>
             <div className='text-slate-400 line-through'>${product.old_price}</div>
             <div className='text-red-500'>${product.new_price}</div>
        </div>
        <div className="de">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ducimus dolorem quasi, saepe modi accusamus quia cum illo, facere ab vero tempore quis eveniet quod dicta. Consectetur minus deleniti quidem c
        </div>
        <div className="">
            <h1 className='mt-5 text-slate-500 text-lg font-semibold'>Select Size</h1>
            <div className="flex my-5 gap-5">
                <div className="px-4 py-2 bg-white border-2 cursor-pointer rounded-md">S</div>
                <div className="px-4 py-2 bg-white border-2 cursor-pointer rounded-md">M</div>
                <div className="px-4 py-2 bg-white border-2 cursor-pointer rounded-md">L</div>
                <div className="px-4 py-2 bg-white border-2 cursor-pointer rounded-md">XL</div>
                <div className="px-4 py-2 bg-white border-2 cursor-pointer rounded-md">XXL</div>
            </div>
            <button onClick={() =>{addToCart(product.id)}} className='p-3 w-[200px] text-lg text-white bg-red-500 mb-5 cursor-pointer'>ADD TO CART</button>
            <p className=' '><span className='font-semibold'>Category :</span>Woman, T-Shirt, Crop Top</p>
            <p className='mt-2'><span className='font-semibold'>Tags :</span>Mordern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
