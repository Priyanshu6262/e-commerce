import React, {useContext, useState} from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
 const [menu, setMenu] = useState('shop')
 const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='flex justify-around p-2 shadow-custom'>
      <div className="flex items-center gap-2">
          <img src={logo}  />
          <p className='text-gray-900 text-xl font-semibold'>SHOPPER</p>
        </div>
        <ul className='flex items-center gap-10 text-slate-500 text-lg font-medium '>
          <li onClick={() => {setMenu("shop")}} className='flex items-center justify-center gap-2 flex-col cursor-pointer'><Link to='/'>Shop</Link>{menu==="shop"?<hr className='w-8 h-1 rounded-lg bg-red-500 border-none'/>:<></>}</li>
          <li onClick={() => {setMenu("mens")}} className='flex items-center justify-center gap-2 flex-col cursor-pointer'><Link to='/mens'>Men</Link> {menu==="mens"?<hr className='w-8 h-1 rounded-lg bg-red-500 border-none'/>:<></>}</li>
          <li onClick={() => {setMenu("womens")}} className='flex items-center justify-center gap-2 flex-col cursor-pointer'><Link to='/womens'>Women</Link> {menu==="womens"?<hr className='w-8 h-1 rounded-lg bg-red-500 border-none'/>:<></>}</li>
          <li onClick={() => {setMenu("kids")}} className='flex items-center justify-center gap-2 flex-col cursor-pointer'><Link to='/kids'>Kids</Link> {menu==="kids"?<hr className='w-8 h-1 rounded-lg bg-red-500 border-none'/>:<></>}</li>
        </ul>
        <div className="flex items-center gap-12">
          <Link to='/login'><button className='w-36 h-10 border-y-2 border-x-2 rounded-full text-slate-500 text-xl font-medium bg-white cursor-pointer active:bg-slate-200'>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className='w-6 h-6 flex justify-center items-center -mt-11 -ml-14 rounded-full text-2xl bg-red-600 text-white'>{getTotalCartItems()}</div>
          </div>
    </div>
  )
}

export default Navbar
