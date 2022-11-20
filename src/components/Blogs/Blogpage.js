import React from 'react'
import Navbar from '../Navbar'
import Rightsection from './Rightsection'
import Sidebar from './Sidebar'

const Blogpage = () => {
  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-12">
        <div className="bg-blue-100 col-span-1">
          <Sidebar />
        </div>
        <div className="bg-blue-200 col-span-8"></div>
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CCE2FC] col-span-3">
            <Rightsection/>
        </div>

      </div>
    </div>
    
  )
}

export default Blogpage
