import React from 'react'

const NewsLatter = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-custom-gradient mt-20 h-96 mx-32'>
      <h1 className='text-5xl text-stone-800 font-semibold pb-6'>Get Exclusive Offer on Your Email</h1>
      <p className='text-lg text-slate-600 font-semibold pb-6'>Subscribe to our nrwsletter and stay updated</p>
      <div className='border-x-2 border-y-2 pl-4 rounded-3xl w-1/2'>
        <input type="email" placeholder='Your Email id' className='border-none outline-none w-1/2 mr-44' />
        <button className='bg-black text-white px-8 py-4 rounded-3xl'>Suscribe</button>
      </div>
    </div>
  )
}

export default NewsLatter
