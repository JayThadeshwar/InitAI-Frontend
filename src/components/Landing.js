import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

const Landing1 = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-[#edf5fe] to-[#cee3fc]">
        <Content/>
        <OurMission />
        <OurVision />
      </div>
    </div>
  );
};

export default Landing1;
