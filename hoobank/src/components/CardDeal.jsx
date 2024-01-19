import React from 'react'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => (
  <section
    className='lg:flex lg:flex-row my-[120px] flex flex-col'>
    <div className='font-poppins flex flex-1 flex-col justify-center items-start'>
      <h1 className='text-white font-semibold text-[48px] leading-[76.8px] mb-5'>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h1>
      <p className='text-dimWhite font-normal text-[18px] leading-[28.8px]'>We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.</p>
      <Button styles="mt-7" />
    </div>
    <div className='flex-1 lg:max-w-[570px] lg:mr-[100px] w-full lg:mt-0 mt-8'>
      <img src={card} alt="bill" className=''/>
    </div>
  </section>
)

export default CardDeal