import React from "react";
import Redcircle from "../../assets/Redcircle.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import Hyphen from "../../assets/Hyphen.svg";

const Timeline = () => {
  return (
    <div>
        <div className="text-white text-center mb-20 text-5xl">Timeline</div>
      <div className="row">
        <div className="grid grid-cols-3">
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img src={Redcircle} alt="" />
                <h2 className="absolute top-2 left-5 text-2xl font-bold text-white">1</h2>
              </div>
            </div>
            <div className="col-span-1 mx-24 my-2">
                <div className="flex justify-between">
                    <p className="text-white text-2xl font-normal">4th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-1 my-2 mb-12">
                    <p className="text-white text-2xl font-normal">Registration Begins</p>
            </div>

            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img src={Redcircle} alt="" />
                <h2 className="absolute top-2 left-5 text-2xl font-bold text-white">2</h2>
              </div>
            </div>
            <div className="col-span-1 mx-24 my-2">
                <div className="flex justify-between">
                    <p className="text-white text-2xl font-normal">14th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-1 my-2 mb-12">
                    <p className="text-white text-2xl font-normal">Registration Ends</p>
            </div>
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img src={Redcircle} alt="" />
                <h2 className="absolute top-2 left-5 text-2xl font-bold text-white">3</h2>
              </div>
            </div>
            <div className="col-span-1 mx-24 my-2">
                <div className="flex justify-between">
                    <p className="text-white text-2xl font-normal">15th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-1 my-2 mb-12">
                    <p className="text-white text-2xl font-normal">Shortlisted Teams Out</p>
            </div>
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img src={Redcircle} alt="" />
                <h2 className="absolute top-2 left-5 text-2xl font-bold text-white">4</h2>
              </div>
            </div>
            <div className="col-span-1 mx-24 my-2">
                <div className="flex justify-between">
                    <p className="text-white text-2xl font-normal">16th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-1 my-2 mb-12">
                    <p className="text-white text-2xl font-normal">Heist Day</p>
            </div>
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img src={Redcircle} alt="" />
                <h2 className="absolute top-2 left-5 text-2xl font-bold text-white">5</h2>
              </div>
            </div>
            <div className="col-span-1 mx-24 my-2">
                <div className="flex justify-between">
                    <p className="text-white text-2xl font-normal">16th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-1 my-2 mb-12">
                    <p className="text-white text-2xl font-normal">Prize Distribution</p>
            </div>

        </div>


        <div className="row">
        <div className="row mt-20">
          <img className="mx-auto" src={WhiteVertical} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
