import React from 'react'
import hans_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='h-screen flex bg-custom-gradient'>
      <div className="flex-1 flex justify-center flex-col gap-7 pl-32 leading-5">
        <h2 className='text-black font-bold'>NEEW ARRIVALS ONLY</h2>
        <div>
            <div className="flex items-center gap-8 -mt-5">
                <p className='text-stone-900 font-semibold text-7xl'>new</p>
                <img src={hans_icon} className='w-16'/>
            </div>
            <p className='text-stone-900 font-semibold text-7xl'>collections</p>
            <p className='text-stone-900 font-semibold text-7xl'>for everyone</p>
        </div>
        <div className="flex justify-center items-center w-56 h-10 bg-red-500 rounded-3xl gap-3 text-white font-normal"> 
            <div>Letest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={hero_image} className='w-96' />
      </div>
    </div>
  )
}

export default Hero
