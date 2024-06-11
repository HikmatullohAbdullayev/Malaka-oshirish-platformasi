import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Guruxyaratish = () => {
  return (
    <div className="creategroup">
      <div className="creategroup__wrapper">
        <div className="create__group__title pl-24 pt-10">
          <button className=" flex items-center justify-center text-sm font-normal leading-6 font-sans text-[#ffff] w-52 h-10 border-2 border-none rounded-xl bg-[#05CC19] p-2.5">
            + Guruh yaratish
          </button>
        </div>
        <div className="module__class__create fixed flex items-center justify-center w-100 h-100 m-auto pl-[25%] ">
          <div className="class__module border  border-slate-400 rounded-xl w-[409px]">
            <div className="module__title">
              <p>+Guruh yaratish</p>
            </div>
            <span className="w-100 h-1 bg-[#0E7ED0] mx-2"></span>
            <form className="module__form flex flex-col pl-5 pb-5 gap-2.5">
              <div className="input__wrapper">
                <p>Guruh nomi</p>
                <input
                  className="h-[50px] w-[350px] border px-4 border-slate-300 outline-none"
                  placeholder="Guruh nomini kiriting"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <p>Malaka oshirish uchun soat</p>
                <input
                  className="h-[50px] w-[350px] border px-4 border-slate-300 outline-none"
                  placeholder="Malaka oshirish uchun soatni kiriting"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <p>Malaka oshirish uchun soat</p>
                <input
                  className="h-[50px] w-[350px] border px-4 border-slate-300 outline-none"
                  placeholder="Malaka oshirish uchun soatni kiriting"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <p>O'quv yili</p>
                <input
                  className="h-[50px] w-[350px] border px-4 border-slate-300 outline-none"
                  placeholder="O'quv yilini kiriting"
                  type="text"
                />
              </div>
              <div className="module__btn__wrapper flex items-center justify-end pr-9">
                <button className="module__btn rounded-sm gap-1 text-[#fff] bg-[#0E7ED0] flex items-center justify-center w-[118px] h-10 border">
                  <AiOutlineCheck className=" text-sm text-[#58b658]" />
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guruxyaratish;
