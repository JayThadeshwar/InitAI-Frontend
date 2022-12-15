import React from "react";
import Profile from "../../assets/Author_img.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Round from "../../assets/Round.svg";
import Content from "../../assets/Blogs_main.svg";
import Dots from "../../assets/Three_dots.svg";
import MultiCarousel from "./MultiCarousel";

const Maincontent = () => {
  return (
    <div>
      <MultiCarousel/>
      <hr />
      <h1 className="font-black text-2xl pt-2 px-2 py-7 ">Latest Blogs</h1>
      <div>
        <div className="flex">
          <span className="pl-2">
            <img src={Profile} alt="" srcset="" />
          </span>
          <div className="px-3 pb-2 text-lg">Author_name</div>
        </div>
        <p className="font-black text-lg py-2 px-2 ">
          MAIN TAGLINE OF THE ARTICLE
        </p>
        <div className="grid grid-cols-1 md:grid-cols-10">
          <div className="col-span-8">
            <p className="px-2 ">
              THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
          </div>
          <div className="mx-auto md:mx-0 col-span-2">
            <img className="md:ml-auto py-4" src={Content} alt="" />
          </div>
        </div>

        <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2">
          <span className="pr-3 lg:pr-4 ">Machine Learning</span>
          <span className="pr-3 lg:pr-4 ">14 min read</span>
          <span className=" hidden lg:pr-4 md:block">
            Based on your reading history
          </span>
          <div className="flex ml-auto">
            <img className=" m-2 w-4 lg:pr-4 lg:w-8 " src={Bookmark} alt="" />
            <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
            <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
          </div>
        </div>

        <hr />
      </div>

      <div>
        <div className="flex pt-4">
          <span className="pl-2">
            <img src={Profile} alt="" srcset="" />
          </span>
          <div className="px-3 pb-2 text-lg">Author_name</div>
        </div>
        <p className="font-black text-lg py-2 px-2 ">
          MAIN TAGLINE OF THE ARTICLE
        </p>
        <div className="grid grid-cols-1 md:grid-cols-10">
          <div className="col-span-8">
            <p className="px-2 ">
              THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
          </div>
          <div className="mx-auto md:mx-0 col-span-2">
            <img className="md:ml-auto py-4" src={Content} alt="" />
          </div>
        </div>

        <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2">
          <span className="pr-3 lg:pr-4 ">Machine Learning</span>
          <span className="pr-3 lg:pr-4 ">14 min read</span>
          <span
            className=" hidden lg:pr-4 md:block"
          >
            Based on your reading history
          </span>
          <div className="flex ml-auto">
            <img className=" m-2 w-4 lg:pr-4 lg:w-8 " src={Bookmark} alt="" />
            <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
            <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
          </div>
        </div>

        <hr />
      </div>

      <div>
        <div className="flex pt-4">
          <span className="pl-2">
            <img src={Profile} alt="" srcset="" />
          </span>
          <div className="px-3 pb-2 text-lg">Author_name</div>
        </div>
        <p className="font-black text-lg py-2 px-2 ">
          MAIN TAGLINE OF THE ARTICLE
        </p>
        <div className="grid grid-cols-1 md:grid-cols-10">
          <div className="col-span-8">
            <p className="px-2 ">
              THE ARTICLE: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
          </div>
          <div className="mx-auto md:mx-0 col-span-2">
            <img className="md:ml-auto py-4" src={Content} alt="" />
          </div>
        </div>

        <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2">
          <span className="pr-3 lg:pr-4 ">Machine Learning</span>
          <span className="pr-3 lg:pr-4 ">14 min read</span>
          <span
            className=" hidden 
                                lg:pr-4 md:block"
          >
            Based on your reading history
          </span>
          <div className="flex ml-auto">
            <img className=" m-2 w-4 lg:pr-4 lg:w-8 " src={Bookmark} alt="" />
            <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
            <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
          </div>
        </div>

        <hr />
      </div>

    </div>
  );
};

export default Maincontent;
