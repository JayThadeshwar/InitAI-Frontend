import React, { useState, useEffect } from 'react'
import Bottombar from './Bottombar'
import RightSection2 from './RightSection2'
import Sidebar from './Sidebar'
import Ellipse from "../../assets/Ellipse 412.svg"
import Ellipse2 from "../../assets/Ellipse 413.svg"
import Rectangle from "../../assets/Rectangle 400.svg"
import { useNavigate } from 'react-router-dom';
import axios from "../../axios";


const  SingleBlog = () => {

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState({});

  const getApiData = async () => {
    
    try {
      const res = await axios.get("/blog");
      setMyData(res.data);
    } catch (error) {
      setIsError("error form content", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {myData.map((post)=>{
        const { id,authors, title, content, readTime } = post;

        return(
          <div key={id} className="grid lg:grid-cols-12 grid-cols-1">
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
                        <img src={Ellipse} alt="" srcset="" />
                      </span>
                      <div className="px-5 pb-2  block">
                        <div className='text-lg font-bold'>{authors}</div>
                        <ul>
                          <li className='text-[12px] inline-flex'>5th November
                            <div className='inline mt-2 mx-[26px]'><img src={Ellipse2} alt="" srcset="" /></div>
                            {readTime}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="font-bold text-[28px] py-2 mt-4">
                      {title.toUpperCase()}
                    </p>
                    <div className="mx-auto md:mx-0 col-span-2">
                      <img className="md:ml-auto py-4" src={Rectangle} alt="" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-10 my-4">
                      <div className="col-span-10 text-[14px]">
                        <p>{content}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white hidden lg:block col-span-3">
              <RightSection2 />
            </div>
            <div className='lg:hidden'>
              <Bottombar/>
            </div>
          </div>

        );
      })}
      
    </>
    
  )
}

export default SingleBlog
