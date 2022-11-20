import React from 'react'
import weAreINIT from '../assets/weAreInit.svg'

const Content = () => {
  return (
    <div className='overflow-hidden'>
      <div className="row grid lg:grid-cols-10 object-center">
        <div className="lg:col-span-6 lg:mt-28 lg:px-16 m-8 p-2">
            <p className='text-[46px] font-light lg:text-left text-center'>We Are</p>
            <p className='text-[#C71A03] text-5xl font-bold lg:text-left text-center'>DJ Init<span className='text-[#4051A3] font-bold'>.Ai</span></p>
            <p className='lg:mt-12 text-2xl font-light mt-2 lg:text-left text-center'>We want to make AI more accessible by holding weekly lectures, research talks and producing blog articles that cover anything from ML algorithms, computer vision, NLP and anything in between.</p>
        </div>
        <div className="col-span-4 mx-auto">
           <img src={weAreINIT} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Content