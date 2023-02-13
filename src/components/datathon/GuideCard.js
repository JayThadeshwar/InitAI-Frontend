import React from 'react'

const GuideCard = (props) => {
  return (
    <div>
        <div className="mx-24 h-60 bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1">
            <div className="bg-black h-full p-4">
            <div className="row mb-1 text-right text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-[#34BDF3] to-[#34BDF3]">
                {props.number}
            </div>
            <div className="row text-left text-white text-2xl">
                {props.content}
            </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default GuideCard
