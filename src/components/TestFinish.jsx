import React from "react";
import { Link } from "react-router-dom";

function TestFinish(props) {
  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto px-[20px] pt-[50px]">
        <div className="flex gap-[105px] items-center table900:gap-[50px] mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
          <h2 className="text-[#8D8484] font-normal  text-[24px] ">
            Yakuniy test
          </h2>

          <div className=" ">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-300 hover:border-blue-400 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>
        </div>

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
    </section>
  );
}

export default TestFinish;
