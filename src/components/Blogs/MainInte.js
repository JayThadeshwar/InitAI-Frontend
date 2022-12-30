import React, { useState, useEffect } from "react";
import axios from "../../axios"
import MultiCarousel from "./MultiCarousel";
import Profile from "../../assets/Author_img.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Round from "../../assets/Round.svg";
import Dots from "../../assets/Three_dots.svg";
import { useNavigate } from 'react-router-dom';

const MainInte = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState({});
  const navigate = useNavigate() ;

  const handleClick = () => {
    navigate("/singleblog");
  }

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
      <div className="sm:px-5 px-20">
        <MultiCarousel/>
        <hr />
      </div>
      <h1 className="font-black text-2xl pt-4 px-2 py-7">Latest Blogs</h1>
      {myData.map((post) => {
        const { id,authors, title, content, mainImage, domains,dateOfPublish, readTime } = post;
        let sents = content.split('.');
        let bag = sents.slice(0,3);
        let showContent = bag.join('.').concat('.');
        let date = new Date(dateOfPublish);
        let date1 = date.toDateString();
        let indexOfSpace = date1.indexOf(' ');
        let dateShow = date1.substring(indexOfSpace + 1)

        return (
          <div key={id} className="mb-4">
            <div className="flex" onClick={handleClick}>
              <span>
                <img src={Profile} alt="" srcset="" />
              </span>
              <span className="px-3 pb-2 text-lg">{authors}</span>
            </div>
            <p className="font-black text-lg py-2 px-2">{title.toUpperCase()}</p>
            <div className="grid grid-cols-1 md:grid-cols-11">
              <div className="col-span-8">
                <p className="px-2 pb-2">{showContent}</p>
              </div>
              <div className="mx-auto md:mx-0 col-span-3">
                <img
                  className="md:ml-auto h-40 w-full my-auto border-2 border-gray-800 rounded-lg shadow-xl"
                  src={mainImage}
                  alt=""
                />
              </div>
            </div>

            <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2">
              <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{domains.toString().split(',').join(" , ")}</span>
              <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{readTime}</span>
              <span className="hidden lg:pr-4 md:block text-[#75758B] font-normal text-sm">
                {dateShow}
              </span>
              <div className="flex ml-auto">
                <img
                  className=" m-2 w-4 lg:pr-4 lg:w-8"
                  src={Bookmark}
                  alt=""
                />
                <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
                <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
              </div>
            </div>
          </div>
        );
      })}
      {/* Hey */}
    </>
  );
};

export default MainInte;
