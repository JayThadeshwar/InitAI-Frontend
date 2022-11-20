import React from "react";
import circle from "../assets/Circle.svg";
import greenline from "../assets/greenLine.svg";
import short_horizontal from "../assets/short_horizontal.svg";
import small_circle from "../assets/small_circle.svg";
import long_horizontal from "../assets/long_horizontal.svg";
import LiveWave from "./LiveWave";

const Roadmap = () => {
  return (
    <div className="bg-gradient-to-b from-[#cee3fc] to-[#edf5fe]">
      <div>
        <LiveWave title={"ROADMAP"} position={"right-12"} />
      </div>

      <div className="row grid lg:grid-cols-11">
        <div className="lg:col-span-5">
          
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row mt-8">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="row">
            <div className="lg:pl-0 pl-4">
            <p className="text-3xl">13TH OCT</p>
            <p className="text-[#029090] mt-5 text-4xl">LECTURE SERIES</p>
            <p className="pe-2 mr-4 text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
              quasi consequuntur rem alias aperiam, minus officiis sit accusamus
              porro, dignissimos libero nulla?
            </p>
            </div>
            <div className="flex w-[80%] justify-end pl-auto mt-8">
            <div className="justify-end px-auto align-bottom relative border-2 border-black" >
            </div>
            <div className="flex">
              <img className="" src={small_circle} alt="" />
              <img className="" src={small_circle} alt="" />
              </div>
            
            {/* </img> */}
              
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
        <div className="col-span-5">
          <div className="row">
            <p className="text-3xl text-right lg:pr-20 mr-4">15TH OCT</p>
            <p className="text-[#029090] mt-5 text-4xl text-right lg:pr-20 mr-4">BLOG-A-THON</p>
            <p className="pl-2 ml-4 text-right text-sm mt-4 lg:pr-20 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
              quasi consequuntur rem alias aperiam, minus officiis sit accusamus
              porro, dignissimos libero nulla?
            </p>
            <div className="lg:grid lg:grid-cols-2 hidden mt-8">
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2" alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="absolute ml-60" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="col-span-2"></div>
          <div className="lg:col-span-3 hidden lg:flex object-right">
            <img src={long_horizontal} className="mt-2 ml-[210px]" alt="" />
            <img className="absolute ml-48" src={small_circle} alt="" />
            <img className="absolute ml-80" src={small_circle} alt="" />
            <img className="absolute ml-[420px]" src={small_circle} alt="" />
            <img className="xl:absolute hidden ml-48 xl:ml-[590px]" src={small_circle} alt="" />
          </div>
        </div>
      </div>

      <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
        <div className="col-span-5">
        <div className="grid grid-cols-3 mt-16">
              <div className="col-span-2 lg:flex hidden">
                <img src={long_horizontal} className="mt-2 mr-12" alt="" />
                <img className="absolute " src={small_circle} alt="" />
                <img className="absolute ml-32" src={small_circle} alt="" />
                <img className="absolute ml-72" src={small_circle} alt="" />
                <img className="absolute ml-[450px]" src={small_circle} alt="" />
              </div>
            </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="col-span-5">
          <div className="row">
            <div className="lg:pl-0 pl-4">
            <p className="text-3xl">18TH OCT</p>
            <p className="text-[#029090] mt-5 text-4xl">LECTURE SERIES</p>
            <p className="pe-2 mr-4 text-sm mt-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
              quasi consequuntur rem alias aperiam, minus officiis sit accusamus
              porro, dignissimos libero nulla?
            </p>
            </div>
            
            <div className="lg:grid hidden lg:grid-cols-3 mt-8">
              <div className="col-span-2"></div>
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2 object-right" alt="" />
                <img className="absolute" src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="xl:absolute hidden ml-48" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8 lg:pb-0 pb-8">
      <div className="col-span-5">
          <div className="row">
            <p className="text-3xl text-right lg:pr-20 mr-4">15TH OCT</p>
            <p className="text-[#029090] mt-5 text-4xl text-right lg:pr-20 mr-4">BLOG-A-THON</p>
            <p className="pl-2 ml-4 text-right text-sm mt-4 lg:pr-20 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perspiciatis tempore ad laboriosam dolorem quidem velit possimus,
              quasi consequuntur rem alias aperiam, minus officiis sit accusamus
              porro, dignissimos libero nulla?
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="col-span-5">
          <div className="col-span-2"></div>
          <div className="col-span-3 mt-24 lg:flex hidden object-right">
            <img src={long_horizontal} className="mt-2 ml-[210px]" alt="" />
            <img className="absolute ml-48" src={small_circle} alt="" />
            <img className="absolute ml-80" src={small_circle} alt="" />
            <img className="absolute ml-[400px]" src={small_circle} alt="" />
            <img className="xl:absolute hidden ml-48 xl:ml-[590px]" src={small_circle} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Roadmap;

// <div className="lg:grid lg:grid-cols-3 hidden mt-8">
//               <div className="col-span-2"></div>
//               <div className="col-span-1 flex">
//                 <img src={short_horizontal} className="mt-2 object-right" alt="" />
//                 <img className="absolute" src={small_circle} alt="" />
//                 <img className="absolute ml-28" src={small_circle} alt="" />
//                 <img className="xl:absolute hidden ml-48" src={small_circle} alt="" />
//               </div>
//             </div>


{/* <div className="flex w-fit justify-end pl-auto mt-8">
            <img className="justify-end px-auto align-bottom relative" src={short_horizontal} alt="" />
            <div className="flex absolute justify-items-start">
              <img className="" src={small_circle} alt="" />
              <img className="" src={small_circle} alt="" />
              </div>
 */}
