import React from 'react'
import Home from '../../assets/home-outline.svg'
import Bookmarks from '../../assets/bookmarks-outline.svg'
import Add from '../../assets/add-circle-outline.svg'
import Doc from '../../assets/document-outline.svg'

const Sidebar = () => {
  return (
    <div className='h-full align-middle items-center content-center'>
      <div className="row grid grid-cols-3 border-r-[2px] border-[#E6E6E6] bg-white h-full align-middle items-center content-center">
        <div className='col-span-1'>
          
        </div>
        <div className='col-span-1'>
        <div className='align-middle items-center content-center sticky h-screen'>
            <div className='my-4 p-2 hover:bg-gray-200 hover:rounded-full w-[40px]'>
              <img src={Home} alt="" />
            </div>
            <div className='my-4 p-2 hover:bg-gray-200 hover:rounded-full w-[40px]'>
              <img src={Bookmarks} alt="" />
            </div>
            <div className='my-4 p-2 hover:bg-gray-200 hover:rounded-full w-[40px]'>
              <img src={Add} alt="" />
            </div>
            <div className='my-4 p-2 hover:bg-gray-200 hover:rounded-full w-[40px]'>
              <img src={Doc} alt="" />
            </div>
          </div>
        </div>
        <div className='col-span-1'>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
