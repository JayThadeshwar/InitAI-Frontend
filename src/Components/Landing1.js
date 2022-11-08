import React from "react";
import Navbar from "./Navbar1";
import Content1 from "./Content1";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

const Landing1 = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-[#edf5fe] to-[#cee3fc]">
        <Content1/>
        <OurMission />
        <OurVision />
      </div>
    </div>
  );
};

export default Landing1;
