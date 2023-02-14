import React from 'react'
import GuideCard from './GuideCard'
import RedVertical from '../../assets/RedVertical.svg'

const Guidelines = () => {
  return (
    <div className=" font-['Montserrat']">
        <div className="row">
          <img className="md:ml-10 mt-2 md:mt-12 md:h-full h-7" src={RedVertical} alt="" />
        </div>
        <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">Guidelines</div>
        <div className="grid col-span-1 md:grid-cols-3 gap-8">
            <GuideCard number="01" content="Participants can register solo or in a team of 2" />
            <GuideCard number="02" content="The complete team should be present at the event venue 20 minutes prior to the scheduled time" />
            <GuideCard number="03" content="Teams can be of 2-4 members" />
            <GuideCard number="04" content="Participants can register solo or in a team of 2" />
            <GuideCard number="05" content="The complete team should be present at the event venue 20 minutes prior to the scheduled time" />
            <GuideCard number="06" content="Teams can be of 2-4 members" />
            <GuideCard number="07" content="Participants can register solo or in a team of 2" />
            <GuideCard number="08" content="The complete team should be present at the event venue 20 minutes prior to the scheduled time" />
            <GuideCard number="09" content="Teams can be of 2-4 members" />
        </div>
      
    </div>
  )
}

export default Guidelines
