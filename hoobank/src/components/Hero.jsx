import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 font-poppins ${styles.flexStart} flex-col sm:px-16 sm:mr-6 px-6 xl:px-0`}>
        {/* discount banner */}
        <div className='sm:flex hidden items-center text-white py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount"
            className='w-[32px] h-[32px] mr-2' />
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span>{" "}
            Discount For{" "}
            <span className='text-white'>1 Month</span>{" "}
            Account
          </p>
        </div>
        {/* head statement */}
        <div className='flex justify-between items-center w-full'>
          <h1 className='font-poppins font-semibold text-[52px] text-white sm:leading-[100px] sm:text-[72px] leading-[75px]'>
            The Next<br/>
            <span className='text-gradient'>Generation</span>
          </h1>
          <div className='sm:flex hidden'>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold text-white sm:text-[68px] text-[52px] sm:leading-[100px] leading-[75px]'>Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} my-0 relative`}>
      <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5]' />
      <div className="absolute w-[40%] h-[35%] top-0 pink__gradient z-[0]" />
      <div className="absolute w-[80%] h-[80%] bottom-40 white__gradient rounded-full z-[1]" />
      <div className="absolute w-[50%] h-[50%] bottom-40 right-20 blue__gradient z-[0]" />
    </div>

    <div className={`${styles.flexCenter} sm:hidden`}>
      <GetStarted />
    </div>

      <div className='flex sm:hidden'>
        <div className='flex flex-1 items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] m-4'>
            <img src={discount} alt="discount"
              className='w-[32px] h-[32px] mr-2' />
            <p className={`${styles.paragraph}`}>
              <span className='text-white'>20%</span>{" "}
              Discount For{" "}
              <span className='text-white'>1 Month</span>{" "}
              Account
            </p>
        </div>
      </div>
  </section>
)

export default Hero