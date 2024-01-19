import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => (
  <section className='font-poppins flex flex-col justify-center mt-[120px]'>
    <div className='flex justify-between'>
      <div>
        <img src={logo} alt="logo" className='w-[200px]' />
        <p className='font-poppins font-normal text-[18px] leading-[32px] w-[300px] text-dimWhite mt-7'>A new way to make payments easy, reliable and secure.</p>
      </div>
      <div className='flex font-poppins justify-between w-[750px]'>
        {footerLinks.map((footerLink, index) => (
          <div key={index} className='flex flex-col justify-start items-start'>
            <h2 className='text-white text-[18px] font-semibold'>{footerLink.title}</h2>
            {footerLink.links.map((link, index) => (
              <a key={index} href={link.link}
                className='text-dimWhite text-[16px] font-normal mt-3'
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-between mt-5 mb-[60px] border-t-[1px] border-t-[dimGrey] pt-6'>
      <p className='text-white text-[18px] font-normal'>2022 HooBank. All Rights Reserved.</p>
      <div className='flex w-[176px] justify-between'>
        {socialMedia.map((socialLink) => (
          <a href={socialLink.link} key={socialLink.id}>
            <img src={socialLink.icon} alt={socialLink.icon} />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer