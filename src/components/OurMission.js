import React from 'react'
import mission from '../assets/mission.svg'

const OurMission = () => {
  return (
    <div className='bg-blue-100 overflow-hidden'>
      <div className="row grid grid-cols-10">
        <div className="lg:col-span-3 lg:ml-12 lg:visible invisible">
            <img src={mission} alt="" />
        </div>
        <div className="lg:col-span-7 lg:mt-16 lg:mx-12 col-span-8">
            <p className='text-[#C71A03] lg:ml-60 text-[40px] font-bold lg:text-left text-center'>Our Mission</p>
            <p className='lg:mt-8 text-2xl font-light lg:text-left text-center'>We want to make AI more accessible by holding weekly lectures, research talks and producing blog articles that cover anything from ML algorithms, computer vision, NLP and anything in between.</p>
        </div>
      </div>
    </div>
  )
}

export default OurMission