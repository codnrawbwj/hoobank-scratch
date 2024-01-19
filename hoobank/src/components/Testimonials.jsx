import React from 'react'
import FeedbackCard from './FeedbackCard'
import { feedbacks } from '../constants'
import styles from '../style'

const Testimonials = () => (
  <section id='clients' className='my-[120px]'>
    <div className={`text-white font-poppins flex justify-start items-center py-8`}>
      <div className='max-w-[470px] font-semibold text-[48px] leading-[81.6px] mr-[230px]'>
        <h1>What people are saying about us</h1>
      </div>
      <div className='max-w-[450px] font-normal text-[18px] leading-[32.4px] text-dimWhite'>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className={`${styles.flexStart} gap-[70px] mt-10`}>
      {feedbacks.map((feedback, id) => (
        <FeedbackCard key={id} {...feedback} />
      ))}
    </div>
  </section>
)

export default Testimonials