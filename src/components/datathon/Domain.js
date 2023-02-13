import React from "react";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import Domain1 from "../../assets/Domain1.svg";

const Domain = () => {
  return (
    <div className="bg-black py-20">
        <div className="row">
        <div className="row">
        <img className="ml-96" src={WhiteVertical} alt="" />
      </div>
      <div className="row">
        <img className="ml-auto mr-32" src={RedVertical} alt="" />
        <p></p>
      </div>
      <div className="text-white text-center mb-20 text-5xl">Domain</div>
      <div className="row">
        <div className="grid grid-cols-4 mx-40 gap-12">
          <div className="col-span-1 rounded-lg bg-[#C5010A] mx-2">
            <img className="mx-auto mt-4" src={Domain1} alt="" />
            <p className="text-white text-center py-3 font-medium">
              Data Science
            </p>
          </div>
          <div className="col-span-1 rounded-lg bg-[#C5010A] mx-2">
            <img className="mx-auto mt-4" src={Domain1} alt="" />
            <p className="text-white text-center py-3 font-medium">
              Data Science
            </p>
          </div>
          <div className="col-span-1 rounded-lg bg-[#C5010A] mx-2">
            <img className="mx-auto mt-4" src={Domain1} alt="" />
            <p className="text-white text-center py-3 font-medium">
              Data Science
            </p>
          </div>
          <div className="col-span-1 rounded-lg bg-[#C5010A] mx-2">
            <img className="mx-auto mt-4" src={Domain1} alt="" />
            <p className="text-white text-center py-3 font-medium">
              Data Science
            </p>
          </div>
        </div>

        <div className="row">
          <img className="ml-10 mt-12" src={RedVertical} alt="" />
        </div>
      </div>
        </div>

        <div className="row">
        <div className="row mt-20">
          <img className="mx-auto" src={WhiteVertical} alt="" />
        </div>
        </div>
      
    </div>
  );
};

export default Domain;
