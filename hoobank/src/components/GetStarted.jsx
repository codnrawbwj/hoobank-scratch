import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';


const GetStarted = () => (
  // first circle
  <div className={`${styles.flexCenter} text-white bg-blue-gradient rounded-full p-[2px] w-[140px] h-[140px] cursor-pointer`}>
    {/* second circle */}
    <div className={`${styles.flexCenter} bg-primary rounded-full w-[100%] h-[100%] flex flex-col`} >
      <div className='flex'>
        <p className='font-poppins font-medium text-[18px] text-gradient mr-2 leading-[23px]'>
          <span>Get</span>
        </p>
        <img src={arrowUp} alt="arrow up" className='w-[23px] object-contain'/>
      </div>
      <p className='font-poppins font-medium text-[18px] text-gradient'>
        <span>Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted