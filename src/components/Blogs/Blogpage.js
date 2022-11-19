import React from 'react'
import Rightsection from './Rightsection'
import Searchbar from './Searchbar'

const Blogpage = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="bg-blue-100 col-span-1"></div>
        <div className="bg-blue-200 col-span-8"></div>
        <div className="bg-blue-100 col-span-3">
            <Rightsection/>
        </div>

      </div>
    </div>
  )
}

export default Blogpage
