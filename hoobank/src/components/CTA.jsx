import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <div className='flex justify-between mt-12 py-16 px-14 bg-black-gradient-2 rounded-[16px]'>
      <div className='font-poppins flex flex-col justify-start'>
        <h1 className='text-white text-[48px] font-semibold'>Come try our service now!</h1>
        <p className='text-dimWhite text-[18px] font-normal max-w-[440px] mt-4'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <Button styles="max-h-[64px] my-auto" />
    </div>
  )
}

export default CTA