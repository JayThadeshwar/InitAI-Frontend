import React from 'react'
import "../CSS/waves.css"

const Waves = (props) => {

    return (

        <div className="relative bg-gradient-to-b from-[#edf5fe] to-[#cee3fc]">
            <div className="ocean mt-0 overflow-y-hidden overflow-x-hidden">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <p className={`text-white z-10 text-4xl ${props.position} absolute  top-20`}> {props.title} </p>
            <div className="ocean2 overflow-x-hidden" style={{ transform: "rotate(180deg)" }}>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    );
}


export default Waves
