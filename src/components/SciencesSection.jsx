import React from "react";


import { Link } from "react-router-dom";
import SliderContainer from "./SliderContainer";

function SciencesSection() {

  
  return (
    <div className="container max-w-[1440px]   mx-auto px-[20px]">
            <h2 className="text-[22px] font-normal text-start text-[#123E02] leading-[30px] " >Фанлар</h2>

        <div className="slider-container relative text-center  gap-[10px]">

        <SliderContainer/>
      </div>
      <div className="">
        <Link>
        Просмотреть все модули
        </Link>
      </div>
    </div>
  );
}

export default SciencesSection;
