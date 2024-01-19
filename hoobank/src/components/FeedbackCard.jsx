import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({ id, content, name, title, img}) => (
  <div className='max-w-[370px] h-[395px] feedback-card rounded-[20px] flex-1 font-poppins py-12 px-8'>
    <img  src={ quotes } alt="quotes" />
    <p className='mt-[56px] text-[18px] text-white leading-[32px]'>{content}</p>
    <div className='mt-[48px] flex justify-start items-center'>
      <img src={img} alt="feeback user image" className='w-[48px]' />
      <div className='flex flex-col justify-center ml-4'>
        <h2 className='text-white text-[18px] font-semibold'>{name}</h2>
        <p className='text-dimWhite'>{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard