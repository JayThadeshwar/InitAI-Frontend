import React from 'react'

const Sidebar = () => {
  return (
    <div className="row grid grid-cols-12 ">
        <div className='lg:col-span-1'>
            <div className='column grid grid-rows-6'>
                <div className='lg:row-span-1'>

                </div>
                <div className='lg:row-span-4'>
                  <button>
                    <ion-icon name="home-outline"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="bookmarks-outline"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </button>
                  <button>
                    <ion-icon name="document-outline"></ion-icon>
                  </button>
                </div>
                <div className='lg:row-span-1'>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
