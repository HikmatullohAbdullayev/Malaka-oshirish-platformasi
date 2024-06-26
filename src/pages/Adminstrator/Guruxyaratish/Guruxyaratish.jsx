import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './guruh__create.css';

const Guruxyaratish = () => {
  const [create, setCreate] = useState(false);
  return (
    <div className="creategroup">
      <div className="creategroup__wrapper flex flex-col gap-10 ">
        <div className="create__group__title pl-24 pt-10">
          <button
            value={create}
            onClick={(e) => setCreate(true)}
            className=" flex items-center justify-center text-sm font-normal leading-6 font-sans text-[#ffff] w-52 h-10 border-2 border-none rounded-xl bg-[#05CC19] p-2.5"
          >
            + Guruh yaratish
          </button>
        </div>
        {create ? (
          <div className="module__class__create my-16   fixed flex items-center justify-center w-100 h-100 m-auto pl-[30%] ">
            <div className="class__module border bg-[white] flex flex-col gap-6  border-slate-200 rounded-xl w-[409px]">
              <div className="module__title flex items-center pl-5 font-sans  h-[60px] rounded-t-xl bg-[#0E7ED0]">
                <p className="flex items-center gap-1.5 text-[#fff]">
                  +Guruh yaratish
                </p>
              </div>
              <span className="w-100 bg-[#0E7ED0] h-1 mx-2"></span>
              <form className="module__form flex flex-col pl-7 pb-5 gap-2.5">
                <div className="group__input__wrapper flex flex-col gap-[15px]">
                  <p className="text-base font-normal leading-[19px] text-black font-sans">
                    Guruh nomi
                  </p>
                  <input
                    className="h-[45px] text-[14px] w-[350px] border px-4 border-slate-300 outline-none"
                    placeholder="Guruh nomini kiriting"
                    type="text"
                  />
                </div>
                <div className="group__input__wrapper flex flex-col gap-[15px]">
                  <p className="text-base font-normal leading-[19px] text-black font-sans">
                    Malaka oshirish uchun soat
                  </p>
                  <input
                    className="h-[45px] text-[14px] w-[350px] border px-4 border-slate-300 outline-none"
                    placeholder="Malaka oshirish uchun soatni kiriting"
                    type="text"
                  />
                </div>
                <div className="group__input__wrapper flex flex-col gap-[15px]">
                  <p className="text-base font-normal leading-[19px] text-black font-sans">
                    Malaka oshirish uchun soat
                  </p>
                  <input
                    className="h-[45px] text-[14px] w-[350px] border px-4 border-slate-300 outline-none"
                    placeholder="Malaka oshirish uchun soatni kiriting"
                    type="text"
                  />
                </div>
                <div className="group__input__wrapper flex flex-col gap-[15px]">
                  <p className="text-base font-normal leading-[19px] text-black font-sans">
                    O'quv yili
                  </p>
                  <input
                    className="h-[45px] text-[14px] w-[350px] border px-4 border-slate-300 outline-none"
                    placeholder="O'quv yilini kiriting"
                    type="text"
                  />
                </div>
                <div className="module__btn__wrapper flex items-center justify-end pr-9">
                  <button
                    value={create}
                    onClick={(e) => setCreate((p) => !p)}
                    className="module__btn rounded-sm gap-1 text-[#fff] bg-[#0E7ED0] flex items-center justify-center w-[118px] h-10 border"
                  >
                    <AiOutlineCheck className=" text-sm text-[#58b658]" />
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="create__table__group  m-auto ml-24  bg-[white]">
          <table className="">
            <thead>
              <tr>
                <th>Guruh</th>
                <th>Malaka oshirish uchun soat</th>
                <th>O’quv yili</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H-151</td>
                <td>20.05.2023</td>
                <td>20.05.2024</td>
              </tr>
              <tr>
                <td>H-150</td>
                <td>20.05.2023</td>
                <td>20.05.2024</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Guruxyaratish;
