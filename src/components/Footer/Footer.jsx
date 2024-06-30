import React from 'react'
import footer_icon from '../assets/logo_big.png'
import pintester_icon from '../assets/pintester_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 gap-5'>
      <div className="flex items-center gap-5">
        <img src={footer_icon} alt="" />
        <p className='text-stone-800 text-4xl font-bold'>SHOPPER</p>
      </div>
      <ul className='flex gap-12 text-stone-700 text-xl'>
        <il className="list">Company</il>
        <il className="list">Products</il>
        <il className="list">Offices</il>
        <il className="list">About</il>
        <il className="list">Contact</il>
      </ul>
      <div className="flex gap-5">
        <div className="sosial_media">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="sosial_media">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="sosial_media">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 w- mb-5 text-stone-800 text-2xl">
        <hr className='w-[1200px] border-none rounded-lg h-0.5 bg-slate-300'/>
        <p className='text-xl font-medium'>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
