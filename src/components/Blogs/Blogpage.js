import React from 'react'
import Rightsection from './Rightsection'
import Maincontent from './Maincontent'
import Searchbar from './Searchbar'

const Blogpage = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="bg-blue-100 col-span-1"></div>
        <div className="bg-white col-span-8"><Maincontent /></div>
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CCE2FC] col-span-3">
          <Rightsection />
        </div>

      </div>
    </div>
  )
}

export default Blogpage
