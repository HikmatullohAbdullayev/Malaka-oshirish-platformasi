import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './dosument.css';

const Hujjatlar = () => {
  return (
    <div className="document w-[1290px] py-6 bg-[red]">
      <div className="container">
        <div className="document__wrapper">
          <div className="document__wrapper__top">
            <div className="document__title flex items-center justify-center text-6 font-normal leading-7">
              <p>Normativ hujjatlar</p>
            </div>
            <button className="w-[200px] h-[40px] flex items-center gap- justify-center rounded-sm text-[white] border-none bg-[#05CC19]">
              + Fayl yuklash
            </button>
          </div>
          <div className="document__wrapper__module flex items-center ml-[250px] justify-center w-[800px]">
            <div className="document__module__wrapper border w-full flex flex-col gap-[10px] rounded-sm">
              <div className="document__module__top h-[45px] bg-[#0E7ED0]"></div>
              <form className="document__module__content flex flex-col gap-[20px]">
                <div className="document__module__input__wrapper flex flex-wrap gap-[15px] justify-center">
                  <div className="document__input__wrapper flex flex-col gap-1">
                    <span>Buyruq raqami</span>
                    <input className="w-[360px] h-10" type="text" />
                  </div>
                  <div className="document__input__wrapper flex flex-col gap-1">
                    <span>Buyruq sanasi</span>
                    <input className="w-[360px] h-10" type="text" />
                  </div>
                  <div className="document__input__wrapper flex flex-col">
                    <span>fayl yuklash</span>
                    <input className="w-[750px] h-[50px] border" type="file" />
                  </div>
                  <div className="document__input__wrapper flex flex-col gap-1">
                    <span>Qisqacha mazmuni</span>
                    <textarea
                      className=" w-[750px] rounded-sm resize-none h-[80px]"
                      type="file"
                    />
                  </div>
                </div>
                <div className="document__btn__wrapper flex items-center pr-[24px] justify-end">
                  <button className="flex items-center justify-center rounded-[5px] text-[white] bg-[#0E7ED0] w-[100px] h-[25px] gap-[10px]">
                    <AiOutlineCheck className=" text-4 text-[#58b658]" />
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hujjatlar;
