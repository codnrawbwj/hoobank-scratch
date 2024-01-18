import React from 'react'

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 font-poppins font-medium bg-blue-gradient rounded-[10px] text-[18px] ${styles} outline-none`}
    >
      Get Started
    </button>
  )
}

export default Button