import React from "react";
import { Link } from "react-router-dom";

function TestFinish(props) {
  return (
      <div className=" my-[40px]">
        <div className="mx-auto border grid gap-[12px] max-w-[1000px] py-[20px] px-[24px] mt-[20px] bg-white ">
          <p className="p-[5px] border">Natija: 35/40</p>
          <p className="p-[5px] bg-green-500 text-white text-center">
            Muvaffaqiyatli bajarildi
          </p>
          <button className="inline-block px-[30px] py-[12px] border mx-auto text-center w-full">
            Sertifikat yuklab olish
          </button>
        </div>

        <div className="mx-auto border grid gap-[12px] max-w-[1000px] py-[20px] px-[24px] mt-[20px]  bg-white ">
          <p className="p-[5px] border">Natija: 26/40</p>
          <p className="p-[5px] bg-red-500 text-white text-center">
            Muvaffaqiyatli bajarilmadi
          </p>
        </div>
      </div>
    
  );
}

export default TestFinish;
