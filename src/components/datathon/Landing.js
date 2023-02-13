import React from "react";
import D2k from "../../assets/D2K.svg";
import D2kEg from "../../assets/D2kEg.svg";
import D2Ktext from "../../assets/D2Ktext.svg";
import prize1 from "../../assets/Prize1.svg";
import prize2 from "../../assets/Prize2.svg";
import prize3 from "../../assets/Prize3.svg";
import Timer from "./Timer";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";

const Landing = () => {
  return (
    <div>
      <div className="row h-[334px] py-6">
        <img className="mx-auto w-60 md:w-80" src={D2k} alt="" />
        <img className="mx-auto h-8 md:h-[47px] my-2" src={D2Ktext} alt="" />
      </div>
      <div className="row">
        <p className="font-['Montserrat'] text-center text-white font-medium text-2xl">
          6 hour datathon by DJ In.IT.AI
        </p>
        <p className="font-['Montserrat'] text-center text-white font-medium text-lg my-8">
          16th February, 2023
        </p>
      </div>

      <div className="row">
        <div className="w-72 md:w-[697px] mx-auto my-4 pb-32">
          <Timer />
        </div>
      </div>

      <div className="row">
        <img className="ml-auto mr-32" src={RedVertical} alt="" />
      </div>
      <div className="row">
        <img className="ml-96" src={WhiteVertical} alt="" />
      </div>
      <div className="row mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <p className="text-4xl font-medium text-white px-24 mx-auto">
              Teams of coders race to turn streams of data into meaningful
              insights, it is a real thrill converting{" "}
              <span className="text-3xl font-medium text-red-600">
                data to knowledge!
              </span>
            </p>

            <p className="text-4xl mt-12 font-medium text-white  px-24  mx-auto">
              With over 100+ participants from numerous colleges, the datathon
              is a gathering where data science enthusiasts collaborate their
              codes to make industry-grade projects based on Data Science
              problems.
            </p>
            <div className="row">
              <img className="ml-10 mt-12" src={RedVertical} alt="" />
            </div>
          </div>

          <div className="col-span-1">
            <img className="mx-auto" src={D2kEg} alt="" />
          </div>
        </div>
        <div className="row my-2">
          <img className="mx-auto" src={WhiteVertical} alt="" />
        </div>
      </div>

      <div className="row bg-gradient-to-b from-[#4B0004] to-[#D1000A] font-['Montserrat'] py-12">
        <div className="text-5xl my-20 text-white text-center">Prizes</div>
        <div className="grid grid-cols-3 gap-8">
          <img className="" src={prize1} alt="" />
          <img className="" src={prize2} alt="" />
          <img className="" src={prize3} alt="" />
        </div>
        <div className="text-white text-3xl mt-24 text-center">
          Guaranteed Internship & Interview opportunities
        </div>
      </div>
      
    </div>
  );
};

export default Landing;
