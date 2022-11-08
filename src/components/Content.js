import React from "react";
import weAreInit from "../assets/weAreInit.svg";
import roadmap from "../assets/Roadmap.svg";
import circle from "../assets/Circle.svg";
import greenline from "../assets/greenLine.svg";
import short_horizontal from "../assets/short_horizontal.svg";
import small_circle from "../assets/small_circle.svg";
import long_horizontal from "../assets/long_horizontal.svg";
// Roadmap previous code
const Content = () => {
  return (
    <div>
      <div className="row relative w-screen">
        <img src={roadmap} className="height-[390px]" alt="" />
        <p className="absolute text-5xl text-white top-80 right-52">ROADMAP</p>
      </div>

      <div className="row grid grid-cols-11">
        <div className="col-span-5">
          <div className="row mt-96">
            <p className="text-3xl float-right">13TH OCT</p>
            <p className="text-[#029090] mt-8 text-4xl float-right">
              LECTURE SERIES
            </p>
            <p className="pe-2 mr-4 text-sm mt-2 float-right ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
              quasi consequuntur rem alias aperiam, minus officiis sit accusamus
              porro, dignissimos libero nulla?
            </p>
            <div className="grid grid-cols-2 mt-8">
              <div className="col-span-1"></div>
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2" alt="" />
                <img className="absolute " src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="absolute ml-60" src={small_circle} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 mt-16">
              <div className="col-span-1"></div>
              <div className="col-span-2 flex">
                <img src={long_horizontal} className="mt-2" alt="" />
                <img className="absolute " src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="absolute ml-60" src={small_circle} alt="" />
                <img className="absolute ml-96" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="row mt-8">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={circle} className="absolute mt-52" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="col-span-5">
          <div className="row">
            <p className="text-3xl">13TH OCT</p>
            <p className="text-[#029090] mt-8 text-4xl">LECTURE SERIES</p>
            <p className="pe-2 mr-4 text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
              quasi consequuntur rem alias aperiam, minus officiis sit accusamus
              porro, dignissimos libero nulla?
            </p>
            <div className="grid grid-cols-2 mt-8">
              <div className="col-span-1"></div>
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2" alt="" />
                <img className="absolute " src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="absolute ml-60" src={small_circle} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 mt-16">
              <div className="col-span-1"></div>
              <div className="col-span-2 flex">
                <img src={long_horizontal} className="mt-2" alt="" />
                <img className="absolute " src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="absolute ml-60" src={small_circle} alt="" />
                <img className="absolute ml-96" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
