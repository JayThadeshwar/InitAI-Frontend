import React from "react";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";
import OurMission from "./OurMission";
import OurProjects from "./OurProjects";
import OurVision from "./OurVision";
import Roadmap from "./Roadmap";

const Landing = () => {
  return (
    <div>
      <div className="">
        <div className="bg-gradient-to-b font-['Montserrat'] from-[#edf5fe] to-[#cee3fc]">
          <Content />
          <OurMission />
          <OurVision />
        </div>
        <OurProjects />
        <Blogs />
        <Roadmap />
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
