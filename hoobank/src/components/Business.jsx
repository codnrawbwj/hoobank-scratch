import React from 'react'
import { features } from '../constants';
import { star, shield, send } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-1 lg:max-w-[580px] w-[90%] justify-center items-center rounded-[20px] p-6 ${index === features.length-1 ? 'mb-0' : 'mb-6'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue mr-5 flex justify-center items-center mr-10`}>
      <img src={icon} alt="icon" className='object-contain'/>
    </div>
    <div className='font-poppins flex-1'>
      <h5 className='text-white font-semibold text-[18px] leading-[23px] mb-1'>{title}</h5>
      <p className={`text-dimWhite text-[16px] font-normal leading-[24px]`}>{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features'
      className={`${layout.section} font-poppins md:mt-[120px]`}>
      <div className={`${layout.sectionInfo}`}>
        <h4 className='text-white font-semibold text-[48px] leading-[76.8px]'>
          You do the business,<br className='sm:block hidden'/>
          we'll handle the money.
        </h4>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10"/>
      
      {/* feature-cards */}
      </div>
      <div className='flex-1 flex flex-col text-white md:mt-0 mt-10'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business