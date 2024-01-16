import React from 'react'
import { stats } from '../constants/index'

const Stats = () => {
  
  return (
    <section className='flex w-full justify-evenly items-center mb-6 flex-wrap'>
      {stats.map((stat) => (
        <div key={stat.id} className='flex-1 flex gap-[8px] font-poppins justify-center items-center'>
          <h4 className='text-white font-semibold text-[36px]'>{stat.value}{" "} </h4>
          <p className='text-gradient font-normal text-[15px]'>{stat.title.toUpperCase()}</p>
        </div>
      ))}
    </section>
  )
}
  
export default Stats