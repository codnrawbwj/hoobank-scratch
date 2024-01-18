import React from 'react'
import { features } from '../constants';
import { star, shield, send } from '../assets';
import styles from '../style';

const Business = () => {
  return (
    <section id='feature'
      className='font-poppins flex my-[180px]'>
      <div className={`flex-1`}>
        <h4 className='text-white font-semibold text-[48px] leading-[76.8px]'>
          You do the business,<br/>
          we'll handle the money.
        </h4>
        <p className={`${styles.paragraph} mt-5 max-w-[480px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className={`mt-10 px-6 py-4 rounded-[10px] bg-blue-gradient font-medium text-[18px] cursor-pointer`}>
          Get Started
        </button>
      </div>
      <div className='flex-1 flex flex-col text-white gap-6'>
        {features.map((feature) => (
          <div className='flex flex-1 max-w-[580px] justify-center items-center hover:bg-black-gradient rounded-[10px] px-4 ml-8'>
            <div className='w-[64px] h-[64px] rounded-full bg-dimBlue mr-5 flex justify-center items-center mr-10'>
              <img src={feature.icon} alt={feature.icon} />
            </div>
            <div className='font-poppins'>
              <h5 className='text-white font-semibold text-[18px]'>{feature.title}</h5>
              <p className={`${styles.paragraph} text-[16px]`}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Business