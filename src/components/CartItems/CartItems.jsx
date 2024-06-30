 import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
 
 const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
   return (
     <div className='mx-32 mt-16'>
       <div className="grid grid-cols-6 items-center gap-4 p-5 text-stone-600 text-lg font-semibold">
        <p>Proudcts</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
       </div>
       <hr className='border-2 bg-slate-100 '/>
       {all_product.map((e) => {
        if(cartItems[e.id]>0) {
            return <div>
                        <div className="grid grid-cols-6 items-center justify-center gap-4 p-5 text-stone-600 text-sm font-medium">
                            <img className='h-20' src={e.image} />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="w-9 h-9 border-2 items-center bg-white">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='w-2 mx-5 cursor-pointer ' onClick={() =>{removeFromCart(e.id)}} src={remove_icon} />
                        </div>
                        <hr className=''/>
                    </div>
            
        }
        return null;
       })}
       <div className="flex my-10 gap-32">
        <div className="flex-1 flex flex-col mr-10 gap-5">
          <h1 className='text-2xl font-bold'>cart Totals</h1>
          <div>
            <div className="flex justify-between py-3">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <p>Delivery</p>
              <p>free</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <p className='font-bold'>Total</p>
              <p className='font-bold'>${getTotalCartAmount()}</p>
            </div>
            <hr />
          </div>
          <button className="border-2 bg-red-500 text-white font-semibold p-2 w-[300px] mt-8">PROCEED TO CHEACKOUT</button>         
        </div>
        <div className="flex-1">
          <p className='text-slate-600 font-normal'>If you have promo code, Enter it here</p>
          <div className="border-2 mt-5 w-[400px] bg-black">
            <input className='p-2 w-[300px] bg-slate-200 outline-none' type="text" placeholder='Enter Your Promo Code'/>
            <button className="ml-5 bg-black text-white font-normal">Sumbit</button>
          </div>
        </div>
       </div>
    </div>
   )
 }
 
 export default CartItems
 