import React from 'react'

const LoginSingup = () => {
  return (
    <div className=' py-10 mx-auto flex justify-center bg-pink-100 h-[620px]'>
      <div className='flex flex-col bg-white w-[40%] h-full p-10'>
        <h1 className='text-2xl font-semibold mb-4'>Sign Up</h1>
        <div className='flex flex-col gap-3'>
          <input className='border-2 p-3 rounded-sm' type="text"  placeholder='Your Name'/>
          <input className='border-2 p-3 rounded-sm' type="email" placeholder='Email Address'/>
          <input className='border-2 p-3 rounded-sm' type="password" placeholder='Password'/>
        </div>
        <button className='p-4 mt-6 bg-red-500 font-bold text-white w-full'>Countinue</button>
        <p className="mt-4">Already have an account? <span className='text-red-600 font-semibold'>Login here</span></p>
        <div className="flex gap-5 mt-6">
          <input type="checkbox" name='id'/>
          <p>By continuine, i agree to thee terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup
