import React from "react";
import styles from "./Livewave.css";

const LiveWave = (props) => {
  return (
    <div className="relative bg-gradient-to-b from-[#edf5fe] to-[#cee3fc]">
      <div className="ocean mt-0 overflow-y-hidden overflow-x-hidden">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <p className={`text-white z-10 text-5xl font-bold ${props.position} absolute top-24`}> {props.title} </p>
      <div className="ocean2 overflow-x-hidden" style={{ transform: "rotate(180deg)" }}>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default LiveWave;
