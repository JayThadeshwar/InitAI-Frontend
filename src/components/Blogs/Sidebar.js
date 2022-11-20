import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="row grid grid-cols-3 border-r-[1px] border-[#E6E6E6] bg-white">
        <div className='lg:col-span-1'>
          <div className='lg:my-60 my-auto'>
            <button className='lg:mx-8 lg:my-2 m-auto p-auto hover:bg-gray-200 hover:rounded-full lg:p-2'>
              <ion-icon name="home-outline" size="large"></ion-icon>
            </button>
            <button className='lg:mx-8 lg:my-2 m-auto p-auto hover:bg-gray-200 hover:rounded-full lg:p-2'>
              <ion-icon name="bookmarks-outline" size="large"></ion-icon>
            </button>
            <button className='lg:mx-8 lg:my-2 m-auto p-auto hover:bg-gray-200 hover:rounded-full lg:p-2'>
              <ion-icon name="add-circle-outline" size="large"></ion-icon>
            </button>
            <button className='lg:mx-8 lg:my-2 m-auto p-auto hover:bg-gray-200 hover:rounded-full lg:p-2'>
              <ion-icon name="document-outline" size="large"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
