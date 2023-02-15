import React from "react";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import PSCard from "./ProbStat";
import PS1 from '../../assets/BnB_PS.pdf';
const ProblemStatements = () => {
    return (
        <div className="bg-black py-20 font-['Montserrat']">
            <div className="row mb-3">                
                <div className="row">
                    <img className="md:ml-auto md:mr-32 ml-auto md:h-full h-7" src={RedVertical} alt="" />
                </div>
                <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">Problem Statement</div>
                <div className="row flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:mx-40 md:gap-12 text-center">
                        <div className="col-span-1 my-2 rounded-lg mx-2">
                            <PSCard pdfObj={PS1}></PSCard>
                        </div>
                        <div className="col-span-1 my-2 rounded-lg mx-2">
                            <PSCard pdfObj={PS1}></PSCard>
                        </div>
                        <div className="col-span-1 my-2 rounded-lg mx-2">
                            <PSCard pdfObj={PS1}></PSCard>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row sm:invisible">
                <div className="row mt-8 md:mt-20">
                    <img className="mx-auto" src={WhiteVertical} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ProblemStatements;
