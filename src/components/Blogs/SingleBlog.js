import React from 'react'
import Bottombar from './Bottombar'
import Sidebar from './Sidebar'
import Profile from "../../assets/Author_img.svg";
import Dots from "../../assets/Three_dots.svg";
import Rectangle from "../../assets/Rectangle 400.svg"
import Rightsection2 from './Rightsection2';

const  SingleBlog = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="bg-white lg:col-span-1 hidden lg:block">
          <Sidebar />
        </div>
        <div className="bg-white lg:col-span-8 col-span-1 px-2 lg:px-28">
        <div>
      <hr />
      <div>
        <div className="font-[Montserrat]">
        <div className="flex mt-16 font-[Montserrat]">
          <span className="pl-2">
            <img src={Profile} alt="" srcset="" />
          </span>
          <div className="px-5 pb-2  block">
            <div className='text-lg font-bold'>Author_name</div>
            <ul>
              <li className='text-[12px] inline-flex'>5th November
                  <div className='inline mt-2 mx-[26px]'><img src={Dots} alt="" srcset="" /></div>
                  14 min read
              </li>
            </ul>
          </div>
        </div>
        <p className="font-bold text-[28px] py-2 mt-4">
          Activation Function in Neural Networks
        </p>
        <div className="mx-auto md:mx-0 col-span-2">
            <img className="md:ml-auto py-4" src={Rectangle} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 my-4">
          <div className="col-span-10 text-[14px]">
            <p>THE ARTICLE: lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips.</p>

            <p>lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem  ipsum lorem ipsumlorem ipsum lorem lorem.</p>
          </div>
        </div>

        <hr />
      </div>
    </div>

    </div>
        </div>
        <div className="bg-white hidden lg:block col-span-3">
          <Rightsection2 />
        </div>
        <div className='lg:hidden'>
          <Bottombar/>
        </div>
      </div>
    </div>
    
  )
}

export default SingleBlog