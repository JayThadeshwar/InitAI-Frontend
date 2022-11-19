import React from 'react'
import vision from '../assets/vision.svg'

const OurVision = () => {
  return (
    <div className='overflow-hidden'>
      <div className="row grid grid-cols-10">
        <div className="lg:col-span-7 lg:px-16 lg:mt-20 mt-8 col-span-10">
            <p className='text-[#C71A03] text-[40px] font-bold lg:text-left text-center'>Our Vision</p>
            <p className='lg:mt-8 text-2xl font-light lg:text-left text-center lg:mx-0 mx-12'>We want to make AI more accessible by holding weekly lectures, research talks and producing blog articles that cover anything from ML algorithms, computer vision, NLP and anything in between.</p>
        </div>
        <div className="lg:col-span-3 lg:visible invisible">
            <img src={vision} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OurVision